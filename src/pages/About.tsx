const timeline = [
  { year: "2005", title: "Bar Council Enrollment", desc: "Enrolled as an Advocate with the Bar Council of Odisha." },
  { year: "2008", title: "Corporate Practice", desc: "Began specialising in corporate law and commercial advisory." },
  { year: "2012", title: "Arbitration & Dispute Resolution", desc: "Expanded practice to include domestic and international arbitration." },
  { year: "2016", title: "Contract Management Advisory", desc: "Launched dedicated contract management services for corporate clients." },
  { year: "2020", title: "Regulatory Compliance", desc: "Added comprehensive regulatory compliance practice." },
  { year: "2024", title: "Current Practice", desc: "Full-service legal practice based in Bhubaneswar with a pan-India client base." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground leading-relaxed">
          A practice built on the principles of diligence, professional integrity, and unwavering commitment to the rule of law.
        </p>
      </div>
    </section>

    {/* Biography */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Professional Biography</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Pravin Hota is a practising Advocate enrolled with the Bar Council of Odisha, with extensive experience in corporate law, civil litigation, criminal law, arbitration, and regulatory compliance. Based in Bhubaneswar, the practice serves a diverse clientele spanning individuals, small and medium enterprises, and large corporations.
          </p>
          <p>
            With a keen understanding of the evolving legal landscape in India, the practice emphasises thorough research, clear communication, and strategic counsel tailored to each client's unique circumstances. Every engagement is approached with the discretion and professionalism that the legal profession demands.
          </p>
        </div>
      </div>
    </section>

    {/* Education */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Education &amp; Enrollment</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Bachelor of Laws (LL.B.) — Utkal University, Bhubaneswar</p>
          <p>Enrolled with the Bar Council of Odisha</p>
          <p>Member, Odisha State Bar Association</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Philosophy &amp; Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Integrity", desc: "Upholding the highest ethical standards in every matter we undertake." },
            { title: "Precision", desc: "Meticulous attention to detail in legal research, drafting, and advocacy." },
            { title: "Client-Centric", desc: "Placing the client's interests at the centre of every legal strategy." },
          ].map((v) => (
            <div key={v.title} className="p-6 border border-border rounded-lg bg-secondary">
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Career Milestones</h2>
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8">
          {timeline.map((item) => (
            <div key={item.year} className="mb-10 ml-6 md:ml-10">
              <div className="absolute -left-[11px] w-5 h-5 rounded-full bg-primary border-4 border-background" />
              <span className="text-sm font-semibold text-primary">{item.year}</span>
              <h3 className="font-serif text-lg font-semibold text-foreground mt-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
