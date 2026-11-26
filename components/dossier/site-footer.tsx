import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div>
          <p className="eyebrow">03 <span>·</span> CONTACT</p>
          <h2>Keep the systems<br />moving<span className="period">.</span></h2>
        </div>
        <a className="footer-email" href="mailto:hello@rebakanyut.com">
          hello@rebakanyut.com <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <p>Part of Rebakanyut <span>·</span> Sibling Data Studio</p>
        <a href="https://rebakanyut.xyz" rel="noreferrer" target="_blank">
          rebakanyut.xyz <ArrowUpRight aria-hidden="true" size={12} />
        </a>
      </div>
    </footer>
  );
}
