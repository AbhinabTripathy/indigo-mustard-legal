import { Briefcase, Scale, FileText, Users, Radio, Home, Receipt, Gavel, GraduationCap, Lightbulb, ShieldCheck } from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Corporate Law" },
  { icon: Scale, title: "Dispute Resolution & Arbitration" },
  { icon: FileText, title: "Writs" },
  { icon: Users, title: "Employment, Service & Labour Law" },
  { icon: Radio, title: "Technology, Media & Telecommunication" },
  { icon: Home, title: "Revenue & Real Estate" },
  { icon: Receipt, title: "Indirect Tax & GST" },
  { icon: Gavel, title: "Criminal Law & White-Collar Crime" },
  { icon: GraduationCap, title: "Educational Institutions & Schools" },
  { icon: Lightbulb, title: "Intellectual Property Law" },
  { icon: ShieldCheck, title: "Consumer Protection" },
];

const sectors = [
  "Telecom, Media & Technology",
  "Education",
  "Food & Hospitality",
  "Health & Wellness",
  "Real Estate & Construction",
  "Power & Energy",
  "Domestic & International Trade",
  "Private Security",
];

const PracticeAreas = () => (
  <div>
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Practice</div>
        <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
          Practice areas &amp; sectors we serve.
        </h1>
        <div className="mt-6 h-[3px] w-24 bg-accent" />
      </div>
    </section>

    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Practice Areas</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-10">Breadth of practice</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((a) => (
            <div key={a.title} className="group flex items-start gap-4 p-6 bg-card border border-border rounded-sm hover:border-navy hover:shadow-md transition-all">
              <div className="w-10 h-10 shrink-0 rounded-sm bg-blue-soft flex items-center justify-center group-hover:bg-navy transition-colors">
                <a.icon size={18} className="text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-base font-semibold text-navy pt-1.5">{a.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-blue-tint">
      <div className="container mx-auto py-14 md:py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Sectors / Industries</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-10">Industries we serve</h2>
        <div className="flex flex-wrap gap-3">
          {sectors.map((s) => (
            <div key={s} className="px-5 py-3 bg-card border border-border rounded-sm text-navy font-medium">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PracticeAreas;
