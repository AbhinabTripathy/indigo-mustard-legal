const articles = [
  {
    title: "Evolving Corporate Governance Standards in India",
    date: "January 15, 2026",
    category: "Corporate Law",
    excerpt: "An analysis of recent amendments to corporate governance norms and their implications for Indian companies, including enhanced board responsibilities and stakeholder protection measures.",
  },
  {
    title: "Key Considerations in Commercial Arbitration",
    date: "December 8, 2025",
    category: "Arbitration",
    excerpt: "Examining the critical factors that influence the outcome of commercial arbitration proceedings, from selection of arbitrators to enforcement of awards.",
  },
  {
    title: "Understanding the New Data Protection Framework",
    date: "November 22, 2025",
    category: "Regulatory Compliance",
    excerpt: "A comprehensive overview of India's evolving data protection legislation and the compliance obligations it imposes on businesses of all sizes.",
  },
  {
    title: "Contract Disputes: Prevention and Resolution Strategies",
    date: "October 10, 2025",
    category: "Contract Law",
    excerpt: "Practical insights into preventing contractual disputes through effective drafting and exploring resolution mechanisms when disputes arise.",
  },
  {
    title: "The Role of Due Diligence in Mergers and Acquisitions",
    date: "September 5, 2025",
    category: "Corporate Law",
    excerpt: "An examination of the due diligence process in M&A transactions, highlighting common pitfalls and best practices for thorough legal review.",
  },
  {
    title: "Recent Developments in Indian Criminal Jurisprudence",
    date: "August 18, 2025",
    category: "Criminal Law",
    excerpt: "Commentary on significant judicial pronouncements and legislative changes impacting criminal law practice in India.",
  },
];

const ThoughtLeadership = () => (
  <div>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Thought Leadership</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights, analysis, and commentary on legal developments and industry trends.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <article key={article.title} className="p-8 rounded-lg border border-border bg-secondary flex flex-col">
              <span className="text-xs font-medium text-primary mb-2">{article.category}</span>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 flex-1">{article.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <span className="text-xs text-primary/70">{article.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ThoughtLeadership;
