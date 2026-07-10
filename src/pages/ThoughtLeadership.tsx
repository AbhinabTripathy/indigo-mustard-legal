const legalConsulting = [
  "Legal consultation and strategic advisory.",
  "Drafting and issuance of legal notices and replies thereto.",
  "Preparation of replies, responses, and legal communications.",
  "Preparation of ESOP policy, scheme, and documentation support.",
  "Regulatory, Government Authorities and compliance support.",
  "Legal Audit, risk review and preventive advisory.",
  "Drafting and review of internal policies (client onboarding–offboarding), declarations, and undertakings.",
  "Review of business records and legal documents.",
  "Suite of business formation and legal advisory services.",
];

const ThoughtLeadership = () => (
  <div>
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Insights</div>
        <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
          Considered advisory, published for reference.
        </h1>
        <div className="mt-6 h-[3px] w-24 bg-accent" />
        <p className="mt-6 max-w-2xl text-foreground/75 leading-relaxed md:text-lg">
          In addition to contract management support, the Firm provides legal consultation and advisory and a range of allied services.
        </p>
      </div>
    </section>

    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Legal Consultation & Allied Services</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-10">A wider advisory offering</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {legalConsulting.map((c, i) => (
            <div key={c} className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm">
              <div className="text-xs font-mono text-accent mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</div>
              <p className="text-foreground/85 leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ThoughtLeadership;
