import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import archerLogo from "@/assets/archer-logo.png";

const navLinks = [
  { name: "Work", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/#process" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/#process") return location.pathname === "/" && location.hash === "#process";
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled && !isHome
          ? "bg-background/70 backdrop-blur-xl border-b border-brand/10"
          : scrolled && isHome
            ? "bg-background/40 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group justify-self-start">
            <img
              src={archerLogo}
              alt=""
              className="h-8 w-8 md:h-9 md:w-9 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] text-foreground uppercase">
                Archers
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.28em] text-muted-foreground uppercase mt-0.5">
                Technologies
              </span>
            </div>
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden lg:flex items-center gap-8 justify-self-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors hover:text-brand ${
                  isActive(link.path) ? "text-brand" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 justify-self-end">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-medium tracking-[0.12em] uppercase border border-brand/40 text-foreground hover:border-brand hover:bg-brand/5 transition-all"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-border/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-widest uppercase ${
                  isActive(link.path) ? "text-brand" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full text-xs tracking-widest uppercase border border-brand/40"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
