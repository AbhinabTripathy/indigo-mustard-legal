import bldg1 from "@/assets/cm-building-1.jpg.asset.json";
import bldg2 from "@/assets/cm-building-2.jpg.asset.json";

const phases = [
  {
    label: "Creation of Contracts",
    items: [
      "Drafting and vetting of new contracts, agreements, and legal documents.",
      "Contract abstraction and extraction of key commercial and legal terms.",
      "Review, redlining, and negotiation support for third-party contracts.",
      "Preparation and standardisation of contract templates and model formats.",
    ],
  },
  {
    label: "Execution & Record Management",
    items: [
      "Verification of authorisations, stamp duty, and execution requirements.",
      "Execution support — printing on stamp paper, e-stamping, notarisation, attestation, and registration.",
      "Physical collection and coordination of signed contracts and completed execution copies.",
      "Follow-up for incomplete signatures, missing annexures, and pending formalities.",
      "Advisory on digital execution and e-contracting processes.",
      "Digitisation, indexing, and repository management for existing and future contracts.",
    ],
  },
  {
    label: "Post-Execution Lifecycle Control",
    items: [
      "Tracking of contract lifecycle events — renewals, expiries, notice periods, and key milestones.",
      "Reminder and escalation support for renewals, extensions, and terminations.",
      "Amendment, addendum, renewal, and termination documentation support.",
      "Contract risk review, legal audit, and compliance tracking.",
      "Development of internal contract management processes and documentation workflows.",
      "Contract enforcement readiness and dispute-prevention review.",
    ],
  },
];

const ContractManagement = () => (
  <div>
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Contract Lifecycle Management</div>
            <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Contracts, from draft to renewal.
            </h1>
            <div className="mt-6 h-[3px] w-24 bg-accent" />
            <p className="mt-6 text-foreground/75 leading-relaxed md:text-lg max-w-xl">
              For businesses in India, contract management is more difficult than it appears. It is not limited to drafting; it involves revisions, approvals, coordination, and constant follow-up across teams.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <img src={bldg1.url} alt="Modern glass skyscraper" className="w-full h-56 object-cover rounded-sm" loading="lazy" />
            <img src={bldg2.url} alt="Curved glass building facade" className="w-full h-56 object-cover rounded-sm mt-8" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* The problem */}
    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">The Problem</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
              Where contract processes typically break down.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground/80 leading-relaxed space-y-4 md:text-lg">
            <p>
              Execution is often one of the most time-consuming stages — a document may need to be printed on the correct stamp paper, signed by the right persons, notarised where required, and checked to ensure that all pages, annexures, and schedules are in order.
            </p>
            <p>
              Delays often arise because of incorrect stamp paper, missing annexures, unavailable signatories, or poor tracking of the final signed copy. The problem does not end with execution — once signed, contracts must be stored properly so that they can be retrieved for compliance, enforcement, internal reference, or dispute resolution.
            </p>
            <p>
              Renewals create another common challenge. Important dates, notice periods, and auto-renewal clauses are often missed, which can result in contracts being renewed on old terms or expiring without timely review.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* The three phases */}
    <section className="bg-blue-tint">
      <div className="container mx-auto py-14 md:py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Our Solution</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-10">Three phases, end-to-end.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <div key={p.label} className="bg-card border border-border rounded-sm p-7">
              <div className="text-4xl font-display font-black text-accent/80">0{i + 1}</div>
              <h3 className="mt-3 font-display text-xl font-bold text-navy">{p.label}</h3>
              <div className="mt-4 h-[2px] w-12 bg-accent" />
              <ul className="mt-5 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ContractManagement;
