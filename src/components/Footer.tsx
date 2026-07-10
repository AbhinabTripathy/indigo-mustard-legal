import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import BrandMark from "./BrandMark";

const Footer = () => (
  <footer className="bg-navy text-white/85">
    <div className="container mx-auto py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <BrandMark className="h-9 w-9" />
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Law Offices of</div>
              <div className="font-display font-bold text-white text-lg">Pravin Hota</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            A full-service law firm delivering comprehensive legal and allied services to businesses at every stage — from formation to expansion.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-4">Explore</h4>
          <div className="grid grid-cols-2 gap-y-2">
            {[
              { label: "About", path: "/about" },
              { label: "Team", path: "/team" },
              { label: "Practice Areas", path: "/practice-areas" },
              { label: "Services", path: "/services" },
              { label: "Contract Management", path: "/contract-management" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-4">Reach Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-white/60" />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-white/60" />
              <div className="flex flex-col">
                <a href="tel:+918114394499" className="hover:text-white transition-colors">+91 8114394499</a>
                <a href="tel:+917681857934" className="hover:text-white transition-colors">+91 7681857934</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-white/60" />
              <a href="mailto:office@pravinhota.in" className="hover:text-white transition-colors">
                office@pravinhota.in
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={16} className="shrink-0 text-white/60" />
              <span>www.pravinhota.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/15 text-center">
        <p className="text-xs text-white/60 mb-2">
          © {new Date().getFullYear()} Law Offices of Pravin Hota. All rights reserved.
        </p>
        <p className="text-[11px] text-white/50 max-w-3xl mx-auto leading-relaxed">
          Disclaimer: This website is meant purely for informational purposes and is not intended to advertise, solicit clients, or invite a lawyer-client relationship. The contents do not constitute legal advice; please seek independent legal advice for your specific matters.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
