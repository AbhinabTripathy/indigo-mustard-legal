import { Link } from "react-router-dom";
import { Scale, Briefcase, Shield, Gavel, FileText, BookOpen, ArrowRight } from "lucide-react";

const practiceAreas = [
  { icon: Briefcase, title: "Corporate Law", desc: "Comprehensive advisory on corporate governance, compliance, and business structuring." },
  { icon: Scale, title: "Civil Litigation", desc: "Strategic representation in civil disputes across trial and appellate courts." },
  { icon: Gavel, title: "Criminal Law", desc: "Defense and advisory services in criminal proceedings with diligence and discretion." },
  { icon: Shield, title: "Arbitration", desc: "Efficient dispute resolution through domestic and international arbitration." },
  { icon: FileText, title: "Contract Advisory", desc: "Drafting, review, and negotiation of commercial agreements and contracts." },
  { icon: BookOpen, title: "Regulatory Compliance", desc: "Guidance on regulatory frameworks and compliance obligations." },
];

const articles = [
  { title: "Evolving Corporate Governance Standards in India", date: "January 2026", category: "Corporate Law" },
  { title: "Key Considerations in Commercial Arbitration", date: "December 2025", category: "Arbitration" },
  { title: "Understanding the New Data Protection Framework", date: "November 2025", category: "Regulatory" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[80vh] flex items-center justify-center bg-background relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Integrity. Precision.<br />
          <span className="text-primary">Legal Excellence.</span>
        </h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          Dedicated to providing discerning legal counsel with the highest standards of professional integrity and commitment to our clients' interests.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded font-medium"
        >
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    {/* About Snapshot */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">About Pravin Hota</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          With extensive experience across multiple domains of law, Pravin Hota provides considered legal counsel to individuals, corporations, and institutions. Rooted in a philosophy of diligence, discretion, and client-centric service, the practice upholds the highest standards of the legal profession.
        </p>
        <Link to="/about" className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-1">
          Read Full Profile <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    {/* Practice Areas */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Practice Areas</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group p-8 rounded-lg border border-border bg-secondary hover:bg-indigo-dye transition-colors duration-300"
            >
              <area.icon size={32} className="text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/practice-areas" className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-1">
            View All Practice Areas <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* Thought Leadership Preview */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Thought Leadership</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <div key={article.title} className="p-6 rounded-lg border border-border bg-background">
              <span className="text-xs text-primary font-medium">{article.category}</span>
              <h3 className="font-serif text-lg font-semibold text-foreground mt-2 mb-3">{article.title}</h3>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/thought-leadership" className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-1">
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground leading-relaxed mb-8">
          Should you wish to discuss a legal matter or seek professional guidance, we welcome your inquiry.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground hover:bg-accent transition-colors duration-200 rounded font-medium"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
