import { MessageSquare, Scale, FileText, Search, Users } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Legal Advisory", desc: "Strategic legal counsel on a wide range of matters including corporate transactions, regulatory issues, and risk assessment. We provide clear, actionable advice tailored to your specific circumstances and objectives." },
  { icon: Scale, title: "Litigation Support", desc: "Comprehensive litigation services from pre-trial preparation through trial advocacy and appellate proceedings. Our approach combines thorough case analysis with effective courtroom strategy." },
  { icon: FileText, title: "Documentation", desc: "Drafting and review of legal documents including agreements, memoranda of understanding, board resolutions, partnership deeds, and regulatory filings. Every document is prepared with precision and attention to detail." },
  { icon: Search, title: "Due Diligence", desc: "Thorough due diligence investigations for corporate transactions, property acquisitions, and regulatory compliance. Our systematic approach ensures comprehensive risk identification and mitigation." },
  { icon: Users, title: "Representation", desc: "Professional representation before courts, tribunals, regulatory bodies, and quasi-judicial authorities. We advocate with integrity and commitment across all forums." },
];

const Services = () => (
  <div>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Services</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive legal services delivered with professionalism, discretion, and a commitment to excellence.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="flex gap-6 p-8 rounded-lg border border-border bg-secondary"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-indigo-dye flex items-center justify-center">
                  <svc.icon size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
