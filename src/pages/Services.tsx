const services = [
  { title: "Litigation, Arbitration & Alternative Dispute Resolution", desc: "Representation and advocacy in trial and appellate forums, and in domestic arbitration and ADR proceedings." },
  { title: "Criminal Defence & Prosecution", desc: "Handling of criminal proceedings, bail matters, and white-collar defence with diligence and discretion." },
  { title: "Legal Consultations & Corporate Advisory", desc: "Considered legal opinions and strategic counsel across corporate, commercial and regulatory matters." },
  { title: "Business Formation & Structuring", desc: "Guidance on choice of entity, incorporation, governance frameworks, and inter-party arrangements." },
  { title: "Start-Up Legal Support", desc: "End-to-end support for early-stage ventures — from constitutional documents to founder and investor arrangements." },
  { title: "Drafting, Review & Negotiation of Commercial Contracts", desc: "Precise drafting, redlining, and negotiation support across the spectrum of commercial agreements." },
  { title: "Contract Lifecycle Management", desc: "End-to-end management of contracts from creation through execution, renewals and closure." },
  { title: "Client Onboarding–Offboarding Process Flow", desc: "Design and documentation of internal onboarding and offboarding processes for institutional clients." },
  { title: "Legal Audits of Running Businesses", desc: "Structured legal audits identifying compliance gaps, contractual exposures and risk mitigation." },
  { title: "IP & Brand Registration, Protection & Litigation", desc: "Trademark, copyright and design registrations, along with enforcement and dispute representation." },
  { title: "Regulatory & Compliance Advisory", desc: "Advisory on sector-specific and cross-cutting regulatory obligations across statutory frameworks." },
  { title: "e-Discovery", desc: "Document review and eDiscovery services drawing on cross-border experience with US-based clients." },
];

const Services = () => (
  <div>
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Services</div>
        <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
          Comprehensive legal &amp; allied services.
        </h1>
        <div className="mt-6 h-[3px] w-24 bg-accent" />
      </div>
    </section>

    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-sm p-7 hover:border-navy transition-colors">
              <div className="flex items-baseline gap-4">
                <div className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
