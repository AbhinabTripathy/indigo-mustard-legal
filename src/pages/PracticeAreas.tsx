import { Scale, Briefcase, Shield, Gavel, FileText, BookOpen } from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Corporate Law", desc: "Advisory on corporate governance, mergers, acquisitions, joint ventures, and business restructuring. Comprehensive support for corporate compliance and regulatory matters." },
  { icon: Scale, title: "Civil Litigation", desc: "Representation in civil disputes including property matters, contractual disputes, recovery proceedings, and constitutional matters across trial and appellate courts." },
  { icon: Gavel, title: "Criminal Law", desc: "Defence and advisory services across the spectrum of criminal proceedings, including bail applications, trial representation, and appellate advocacy." },
  { icon: Shield, title: "Arbitration", desc: "Domestic and international arbitration services including drafting of arbitration clauses, conduct of proceedings, and enforcement of arbitral awards." },
  { icon: FileText, title: "Contract Advisory", desc: "Comprehensive contract services including drafting, review, negotiation, and advisory on commercial agreements, service contracts, and employment agreements." },
  { icon: BookOpen, title: "Regulatory Compliance", desc: "Guidance on compliance with statutory and regulatory frameworks including environmental law, labour law, corporate governance norms, and industry-specific regulations." },
];

const PracticeAreas = () => (
  <div>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Practice Areas</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A broad spectrum of legal services delivered with depth of knowledge and professional rigour.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group p-8 rounded-lg border border-border bg-secondary hover:bg-indigo-dye transition-all duration-300"
            >
              <area.icon size={36} className="text-primary mb-5" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PracticeAreas;
