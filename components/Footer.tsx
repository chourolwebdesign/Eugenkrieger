import Icon from "./Icon";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-800/60">
      <div className="container-px px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
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
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a
                    href="#leistungen"
                    className="text-sm text-white/65 transition-colors hover:text-orange"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="inline-flex items-center gap-2.5 text-white/65 transition-colors hover:text-orange"
                >
                  <Icon name="phone" className="h-4 w-4 text-orange" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-white/65 transition-colors hover:text-orange"
                >
                  <Icon name="mail" className="h-4 w-4 text-orange" />
                  {site.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2.5 text-white/65">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>
                    {site.address.street}, {site.address.postalCode}{" "}
                    {site.address.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/impressum" className="text-white/65 transition-colors hover:text-orange">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-white/65 transition-colors hover:text-orange">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-white/65 transition-colors hover:text-orange">
                  Kontakt
                </a>
              </li>
            </ul>
            <a href="#termin" className="btn-primary mt-6 !px-5 !py-2.5 !text-sm">
              Termin buchen
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/45 sm:flex-row sm:text-left">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>{site.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
