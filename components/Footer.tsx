import Icon, { type IconName } from "./Icon";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

const quickActions: { icon: IconName; href: string; label: string; external?: boolean }[] = [
  { icon: "phone", href: site.phone.href, label: "Anrufen" },
  { icon: "whatsapp", href: site.whatsapp.href, label: "WhatsApp", external: true },
  { icon: "mail", href: `mailto:${site.email}`, label: "E-Mail" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
    >
      <span className="h-px w-0 bg-orange transition-all duration-300 group-hover:w-4" />
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        {children}
      </span>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-800/70">
      {/* layered ambient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1B3866]/50 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 divider-glow" />
      </div>

      <div className="container-px relative px-6 pt-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + quick actions */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-11 w-11 shrink-0" />
              <span className="leading-none">
                <span className="block text-base font-extrabold tracking-tight text-white">
                  EUGEN KRIEGER
                </span>
                <span className="block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-orange-300">
                  Entrümpelung &amp; Service
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {site.slogan} {site.subline} Ihr zuverlässiger Partner für
              Entrümpelung, Haushaltsauflösung und Umzüge in Bornheim und
              Umgebung.
            </p>
            <div className="mt-6 flex gap-3">
              {quickActions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  aria-label={a.label}
                  target={a.external ? "_blank" : undefined}
                  rel={a.external ? "noopener noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:bg-orange hover:text-white"
                >
                  <Icon name={a.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Leistungen
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <FooterLink href="#leistungen">{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 break-all text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon name="mail" className="h-4 w-4" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/70">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange">
                    <Icon name="pin" className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">
                    {site.address.street}, {site.address.postalCode}{" "}
                    {site.address.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Legal + CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Rechtliches
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <FooterLink href="/impressum">Impressum</FooterLink>
              </li>
              <li>
                <FooterLink href="/datenschutz">Datenschutz</FooterLink>
              </li>
              <li>
                <FooterLink href="#kontakt">Kontakt</FooterLink>
              </li>
            </ul>
            <a href="#termin" className="btn-primary mt-6 !px-5 !py-2.5 !text-sm">
              <Icon name="calendar" className="h-4 w-4" />
              Termin buchen
            </a>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="divider-glow" />
          <div className="flex flex-col items-center justify-between gap-4 py-8 text-center text-sm text-white/45 sm:flex-row sm:text-left">
            <p>
              © {year} {site.legalName}. Alle Rechte vorbehalten.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-white/55 transition-colors hover:text-orange"
            >
              Nach oben
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange/50">
                <Icon name="arrowDown" className="h-4 w-4 rotate-180" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
