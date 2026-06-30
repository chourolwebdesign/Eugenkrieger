import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_PHOTOS = 6;

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

type Booking = {
  date: string;
  time: string;
  service: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  description: string;
};

function buildHtml(b: Booking) {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 14px;color:#64748b;font-weight:600;white-space:nowrap;vertical-align:top">${esc(
          label,
        )}</td><td style="padding:8px 14px;color:#0B1E3B">${esc(value)}</td></tr>`
      : "";

  return `<!doctype html><html><body style="margin:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:18px;overflow:hidden;max-width:600px">
        <tr><td style="background:#0B1E3B;padding:28px 32px">
          <div style="color:#fff;font-size:20px;font-weight:bold">Neue Terminanfrage</div>
          <div style="color:#F58220;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-top:4px">Eugen Krieger · Entrümpelung &amp; Service</div>
        </td></tr>
        <tr><td style="padding:24px 18px">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-collapse:collapse">
            ${row("Wunschdatum", b.date)}
            ${row("Wunschuhrzeit", b.time ? `${b.time} Uhr` : "")}
            ${row("Leistung", b.service)}
            ${row("Name", b.name)}
            ${row("Telefon", b.phone)}
            ${row("E-Mail", b.email)}
            ${row("Adresse", b.address)}
            ${row("Beschreibung", b.description)}
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 28px">
          <a href="tel:${esc(b.phone)}" style="display:inline-block;background:#F58220;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:bold;font-size:14px">Kunden anrufen</a>
        </td></tr>
        <tr><td style="background:#f8fafc;padding:16px 32px;color:#94a3b8;font-size:12px">
          Diese Anfrage wurde über ${esc(site.url)} gesendet.
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

function buildText(b: Booking) {
  return [
    "Neue Terminanfrage – Eugen Krieger Entrümpelung & Service",
    "",
    `Wunschdatum:   ${b.date}`,
    `Wunschuhrzeit: ${b.time ? `${b.time} Uhr` : "-"}`,
    `Leistung:      ${b.service}`,
    `Name:          ${b.name}`,
    `Telefon:       ${b.phone}`,
    `E-Mail:        ${b.email || "-"}`,
    `Adresse:       ${b.address || "-"}`,
    `Beschreibung:  ${b.description || "-"}`,
  ].join("\n");
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const booking: Booking = {
    date: String(form.get("date") || "").slice(0, 40),
    time: String(form.get("time") || "").slice(0, 10),
    service: String(form.get("service") || "").slice(0, 80),
    name: String(form.get("name") || "").trim().slice(0, 120),
    phone: String(form.get("phone") || "").trim().slice(0, 60),
    email: String(form.get("email") || "").trim().slice(0, 160),
    address: String(form.get("address") || "").trim().slice(0, 240),
    description: String(form.get("description") || "").trim().slice(0, 2000),
  };

  // Honeypot (optional anti-spam): if a hidden "company" field is filled, drop.
  if (String(form.get("company") || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!booking.name || !booking.phone || !booking.date || !booking.time) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  // Collect photo attachments (capped)
  const attachments: { filename: string; content: string }[] = [];
  const files = form.getAll("photos").filter((f): f is File => f instanceof File);
  for (const file of files.slice(0, MAX_PHOTOS)) {
    if (file.size === 0 || file.size > MAX_PHOTO_BYTES) continue;
    if (!file.type.startsWith("image/")) continue;
    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name || "foto.jpg",
      content: buf.toString("base64"),
    });
  }

  const notifyTo = process.env.BOOKING_NOTIFY_EMAIL || site.email;
  const from =
    process.env.BOOKING_FROM_EMAIL || "Buchung <onboarding@resend.dev>";
  const resendKey = process.env.RESEND_API_KEY;

  // Send via Resend if configured. Otherwise accept + log (dev/demo mode).
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [notifyTo],
          reply_to: booking.email || undefined,
          subject: `Neue Terminanfrage: ${booking.service} · ${booking.date} ${booking.time}`,
          html: buildHtml(booking),
          text: buildText(booking),
          attachments: attachments.length ? attachments : undefined,
        }),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Resend error", res.status, detail);
        return NextResponse.json(
          { error: "E-Mail konnte nicht gesendet werden." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("Booking send failed", err);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 502 },
      );
    }
  } else {
    // No email provider configured — log so nothing is lost in dev/demo.
    console.info(
      "[BOOKING] (no email provider configured)\n" + buildText(booking),
      attachments.length ? `\n(${attachments.length} photo attachment(s))` : "",
    );
  }

  return NextResponse.json({ ok: true });
}
