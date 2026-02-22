import { PenTool, Eye, Handshake, ShieldCheck, RefreshCw } from "lucide-react";

const sections = [
  { icon: PenTool, title: "Drafting", desc: "Precise drafting of commercial contracts, service agreements, non-disclosure agreements, and bespoke legal instruments. Each document is crafted to protect our clients' interests while maintaining clarity and enforceability." },
  { icon: Eye, title: "Reviewing", desc: "Thorough review of existing contracts and agreements to identify potential risks, ambiguities, and areas for improvement. Our review process ensures that every clause serves its intended purpose." },
  { icon: Handshake, title: "Negotiation Support", desc: "Strategic support during contract negotiations, helping clients achieve favourable terms while maintaining productive business relationships. We balance assertiveness with pragmatism." },
  { icon: ShieldCheck, title: "Risk Mitigation", desc: "Identification and assessment of contractual risks with tailored mitigation strategies. We help clients understand and manage their exposure across all contractual relationships." },
  { icon: RefreshCw, title: "Lifecycle Management", desc: "End-to-end contract lifecycle management from inception through execution, renewal, and termination. Our systematic approach ensures no obligation is overlooked and every deadline is met." },
];

const ContractManagement = () => (
  <div>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Contract Management</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional contract management services designed to safeguard your interests and streamline your legal operations.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec) => (
            <div key={sec.title} className="p-8 rounded-lg border border-border bg-secondary">
              <sec.icon size={32} className="text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{sec.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ContractManagement;
