import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Store", path: "/store" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    /* pb-32 on mobile only to clear the fixed bottom nav bar */
    <footer className="bg-card border-t border-border py-16 max-md:pb-32">
      <div className="container mx-auto px-6">

        {/* ══════════ DESKTOP — 100% original 3-col grid ══════════ */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black tracking-widest uppercase text-foreground block leading-none">
                MECHTON
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                International
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted international partner for premium heavy equipment and machinery from the world's leading brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@mechtoninternational.com" className="hover:text-primary transition-colors">
                  info@mechtoninternational.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>
                  Meydan Grandstand, 6th floor,<br />
                  Meydan Road, Nad Al Sheba,<br />
                  Dubai, U.A.E.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ══════════ MOBILE ONLY — 2-col modern layout ══════════ */}
        <div className="md:hidden">

          {/* Brand — full width on top */}
          <div className="mb-8">
            <div className="mb-3">
              <span className="text-2xl font-black tracking-widest uppercase text-foreground block leading-none">
                MECHTON
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                International
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your trusted international partner for premium heavy equipment from the world's leading brands.
            </p>
          </div>

          {/* 2-col: Quick Links + Contact */}
          <div className="grid grid-cols-2 gap-8">

            {/* Quick Links */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-foreground text-xs mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-foreground text-xs mb-4">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@mechtoninternational.com"
                    className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Mail className="w-3 h-3 text-primary" />
                    </span>
                    <span className="break-all leading-relaxed">info@mechton international.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <MapPin className="w-3 h-3 text-primary" />
                    </span>
                    <span className="leading-relaxed">Meydan Grandstand, 6th floor, Dubai, U.A.E.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright — same on all sizes */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mechton International. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
