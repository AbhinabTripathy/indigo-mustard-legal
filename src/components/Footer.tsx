import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-primary/30">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-xl font-bold text-primary mb-4">Pravin Hota</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Advocate &amp; Legal Consultant providing professional legal services with integrity, precision, and commitment to excellence.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Practice Areas", path: "/practice-areas" },
              { label: "Services", path: "/services" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>DLF Cybercity, Bhubaneswar, Odisha, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:pravinkumarhota@gmail.com" className="hover:text-primary transition-colors">
                pravinkumarhota@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+918114394499" className="hover:text-primary transition-colors">
                +91 81143 94499
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground mb-2">
          © {new Date().getFullYear()} Pravin Hota. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 max-w-2xl mx-auto">
          Disclaimer: This website is meant purely for informational purposes and is not an advertisement or solicitation. The information provided does not constitute legal advice and should not be relied upon as such.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
