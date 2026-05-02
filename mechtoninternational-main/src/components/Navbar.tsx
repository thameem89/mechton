import { useState, useEffect } from "react";
import { X, Home, Info, ShoppingBag, Phone, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: "Home", path: "/", icon: Home },
    { label: "About", path: "/about", icon: Info },
    { label: "Store", path: "/store", icon: ShoppingBag },
    { label: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== "/"
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-widest uppercase text-foreground">
              MECHTON
            </span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
              International
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${isActive(l.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider rounded hover:glow-red transition-all duration-300"
              >
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger — modern lines */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-foreground group-hover:bg-primary transition-colors" />
            <span className="block w-4 h-[2px] bg-foreground group-hover:bg-primary transition-colors" />
            <span className="block w-6 h-[2px] bg-foreground group-hover:bg-primary transition-colors" />
          </button>
        </div>
      </nav>

      {/* ── Full-screen Mobile Drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-400 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[320px] z-[70] md:hidden
          bg-gradient-to-b from-[#0f0f0f] to-[#1a0505]
          border-l border-primary/20 shadow-2xl
          transition-transform duration-500
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-widest uppercase text-white">MECHTON</span>
            <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-primary">International</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Red accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        {/* Nav links */}
        <ul className="flex flex-col px-4 pt-6 gap-1">
          {links.map((l, i) => {
            const Icon = l.icon;
            const active = isActive(l.path);
            return (
              <li key={l.label}>
                <Link
                  to={l.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group
                    ${active
                      ? "bg-primary/15 border border-primary/30"
                      : "hover:bg-white/5 border border-transparent"
                    }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className={`w-9 h-9 flex items-center justify-center rounded-lg
                    ${active ? "bg-primary text-white" : "bg-white/5 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"}
                    transition-all duration-300`}
                  >
                    <Icon size={16} />
                  </span>
                  <span className={`flex-1 font-bold uppercase tracking-wider text-sm
                    ${active ? "text-white" : "text-muted-foreground group-hover:text-white"}`}>
                    {l.label}
                  </span>
                  <ChevronRight size={14} className={`transition-transform duration-300 group-hover:translate-x-1
                    ${active ? "text-primary" : "text-white/20"}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-xl glow-red hover:brightness-110 transition-all duration-300"
          >
            Get a Quote
            <ChevronRight size={16} />
          </Link>
          <p className="text-center text-xs text-white/30 mt-4 tracking-wider">
            info@mechtoninternational.com
          </p>
        </div>
      </div>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 mobile-bottom-nav">
        <div className="relative flex items-center justify-between px-1 py-2">
          {/* glass bg */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-t border-white/10" />
          {links.map((l) => {
            const Icon = l.icon;
            const active = isActive(l.path);
            return (
              <Link
                key={l.label}
                to={l.path}
                className="relative z-10 flex-1 flex flex-col items-center gap-1 py-1 group overflow-hidden"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
                  ${active
                    ? "bg-primary shadow-[0_0_16px_rgba(225,6,0,0.5)] scale-110"
                    : "bg-transparent group-active:bg-white/10"}`}
                >
                  <Icon
                    size={18}
                    className={`transition-colors duration-300 ${active ? "text-white" : "text-white/50 group-hover:text-white"}`}
                  />
                </div>
                <span className={`text-[8px] font-black uppercase tracking-[0.1em] transition-colors duration-300 truncate w-full text-center px-1
                  ${active ? "text-primary font-black" : "text-white/40 group-hover:text-white/70"}`}>
                  {l.label}
                </span>
                {active && (
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary rounded-b-full shadow-[0_0_8px_primary]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
