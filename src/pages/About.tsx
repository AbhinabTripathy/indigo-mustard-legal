const lawyers = [
  {
    name: "Pravin Hota",
    role: "Principal Counsel, Head of Disputes",
    bio: "An Advocate with dual expertise in Litigation and Corporate Advisory. Pravin is a former Civil Judge in the Odisha Judicial Service (OJS) with nearly six years of judicial experience and a complementary experience of more than 10 years in both Trial and Appellate Courts (including the Supreme Court of India) as a Judge and an Advocate.",
  },
  {
    name: "P. Srivastav",
    role: "Corporate Lawyer & Contract Management Specialist",
    bio: "A Corporate Lawyer and a Contract Lifecycle Management Specialist with a decade of experience in the field.",
  },
  {
    name: "D. Nayak",
    role: "Corporate Lawyer, e-Discovery & Document Review Expert",
    bio: "A Corporate Lawyer with a decade of experience in eDiscovery, document review, internal and regulatory investigations serving clients primarily in the USA.",
  },
  {
    name: "Jibesh Kumar Padhiary",
    role: "Counsel, Disputes & Corporate",
    bio: "An Advocate with dual expertise in Litigation and Corporate Advisory focusing on Commercial and Criminal Laws. Jibesh is a graduate of the Symbiosis Law School, Noida and has worked with the leading law firms of the country.",
  },
  {
    name: "Baivav Mishra",
    role: "Counsel, Disputes & Corporate",
    bio: "An Advocate with core litigation experience in civil, criminal and service law. He practices across the High Court of Orissa, Central Administrative Tribunal and the District Courts of Bhubaneswar and Cuttack.",
  },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">About Us</div>
        <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
          A collective of like-minded legal professionals.
        </h1>
        <div className="mt-6 h-[3px] w-24 bg-accent" />
      </div>
    </section>

    {/* Intro */}
    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">The Firm</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
              Bhubaneswar-headquartered, working across India.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground/80 leading-relaxed space-y-5 md:text-lg">
            <p>
              Based in Bhubaneswar, the Law Offices of Pravin Hota serves clients with business interests and legal issues across the Bhubaneswar–Cuttack region, throughout Odisha, and through its associate offices across India.
            </p>
            <p>
              It functions as a collective of like-minded professionals, bringing together diverse areas of knowledge and practice to serve clients in a coordinated and effective manner.
            </p>
            <p>
              The Firm provides end-to-end legal and allied services across litigation and alternative dispute resolution, criminal defence and prosecution, legal consultation, corporate advisory, contract lifecycle management, legal audits of running businesses, drafting and review of commercial contracts and agreements, IP registration, protection and litigation, e-discovery, and regulatory and compliance advisory.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Lawyer profiles (text-heavy) */}
    <section className="bg-blue-tint">
      <div className="container mx-auto py-14 md:py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Members</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-10">The five lawyers of the office</h2>
        <div className="space-y-6">
          {lawyers.map((l, i) => (
            <div key={l.name} className="bg-card border border-border rounded-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="text-4xl font-display font-black text-accent/80">0{i + 1}</div>
                <div className="mt-2 font-display font-bold text-navy text-lg">{l.name}</div>
                <div className="text-sm text-muted-foreground italic">{l.role}</div>
              </div>
              <p className="md:col-span-9 text-foreground/80 leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Practice snapshot */}
    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Practice</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">Areas of practice</h2>
        <p className="text-foreground/75 max-w-3xl leading-relaxed">
          Corporate law, writs, employment, service and labour law, telecom law, education laws, revenue and real estate, criminal law, white-collar crime, intellectual property law, and consumer protection.
        </p>
      </div>
    </section>
  </div>
);

export default About;
