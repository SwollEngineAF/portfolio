import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:hello@rebakanyut.com" },
  { label: "GitHub", href: "https://github.com/SwollEngineAF", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syahiidrasidi/", external: true },
  { label: "Medium", href: "https://medium.com/@syahiid.rasidi", external: true },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section">
      <p className="eyebrow">REBAKANYUT <span>·</span> THE PRACTICE <span>·</span> SYD</p>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Syahiid<br className="mobile-break" /> Rasidi<span className="period">.</span></h1>
          <p className="hero-subtitle">SCADA <span>·</span> IT <span>·</span> product — solving real systems with quiet precision.</p>
          <p className="hero-summary">
            Certified Technologist with a background spanning industrial automation, airport baggage systems, and full-stack product engineering. At Rebakanyut, I build the channels—connecting systems so data keeps moving.
          </p>
          <nav aria-label="Social links" className="social-links">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                {link.label}
                {link.external && <ArrowUpRight aria-hidden="true" size={13} />}
              </a>
            ))}
          </nav>
        </div>
        <aside aria-label="Profile portrait and dossier details" className="hero-note">
          <div className="portrait-frame">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UvBwfXTjKFeJ1nsxoTzk4GmGiEI4iL.png"
              alt="Illustrated profile portrait of Syahiid Rasidi"
              fill
              priority
              sizes="(max-width: 800px) 170px, 220px"
              className="portrait-image"
            />
          </div>
          <div className="hero-note-copy">
            <span className="note-index">FIELD NOTE / 01</span>
            <span className="note-rule" />
            <p>Engineering across <br />airports, industry <br />and product.</p>
            <span className="note-coordinate">SCADA · INFRASTRUCTURE · SOFTWARE</span>
          </div>
        </aside>
      </div>
      <div className="hero-bottomline">
        <span>PERSONAL CV &amp; ENGINEERING DOSSIER</span>
        <span>INDEPENDENT PRACTICE <span aria-hidden="true">↘</span></span>
      </div>
    </section>
  );
}
