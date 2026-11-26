import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="back-link" href="https://rebakanyut.xyz">
          <span aria-hidden="true">←</span>
          <span>rebakanyut.xyz</span>
        </Link>
        <div className="header-right">
          <p className="header-ident">SYD <span>·</span> IT ENGINEER <span>·</span> DOSSIER</p>
          <nav aria-label="Main navigation" className="header-nav">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
