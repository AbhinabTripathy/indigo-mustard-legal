import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "Services", path: "/services" },
  { label: "Contract Management", path: "/contract-management" },
  { label: "Insights", path: "/thought-leadership" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <BrandMark className="h-8 w-8" />
          <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Law Offices of</div>
            <div className="font-display font-bold text-navy text-base md:text-lg tracking-tight">Pravin Hota</div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  active
                    ? "text-navy bg-blue-soft"
                    : "text-foreground/70 hover:text-navy hover:bg-blue-soft/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          className="xl:hidden text-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-background border-t border-border pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-navy bg-blue-soft"
                  : "text-foreground/75 hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
