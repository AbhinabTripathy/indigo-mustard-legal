import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Pravin Hota",
    designation: "Founder & Principal Advocate",
    bio: "Enrolled with the Bar Council of Odisha with extensive experience in corporate law, litigation, and arbitration.",
  },
  {
    name: "Ananya Mishra",
    designation: "Associate Advocate",
    bio: "Specialises in civil litigation and regulatory compliance with a focus on commercial disputes.",
  },
  {
    name: "Rajesh Patel",
    designation: "Associate Advocate",
    bio: "Handles criminal law matters and contract advisory services with thorough attention to detail.",
  },
  {
    name: "Sneha Das",
    designation: "Legal Researcher",
    bio: "Supports the practice with in-depth legal research, case analysis, and documentation.",
  },
];

const Team = () => (
  <div>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Team</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A dedicated team of legal professionals committed to providing considered and diligent legal counsel.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center p-8 rounded-lg border border-border bg-secondary">
              <div className="w-24 h-24 rounded-full bg-indigo-dye flex items-center justify-center mx-auto mb-6">
                <User size={40} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.designation}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
