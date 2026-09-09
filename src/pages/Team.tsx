import pravin from "@/assets/pravin-hota-new.jpg.asset.json";
import jibesh from "@/assets/jibesh-padhiary-new.jpg.asset.json";
import baivav from "@/assets/baivav-mishra-new.jpg.asset.json";
import ashish from "@/assets/ashish-samal.jpg.asset.json";

type Member = { name: string; role: string; image?: string; initials: string };

const members: Member[] = [
  { name: "Pravin Hota", role: "Principal Counsel, Head of Disputes", image: pravin.url, initials: "PH" },
  { name: "P. Srivastav", role: "Corporate Lawyer & Contract Management Specialist", initials: "PS" },
  { name: "D. Nayak", role: "Corporate Lawyer, e-Discovery & Document Review Expert", initials: "DN" },
  { name: "Jibesh Kumar Padhiary", role: "Counsel, Disputes & Corporate", image: jibesh.url, initials: "JP" },
  { name: "Baivav Mishra", role: "Of-Counsel", image: baivav.url, initials: "BM" },
  { name: "Ashish Samal", role: "Registered Legal Assistant, High Court of Orissa", image: ashish.url, initials: "AS" },
];

const Team = () => (
  <div>
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">The Team</div>
        <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
          Diverse expertise, coordinated delivery.
        </h1>
        <div className="mt-6 h-[3px] w-24 bg-accent" />
        <p className="mt-6 max-w-2xl text-foreground/75 leading-relaxed md:text-lg">
          The Firm's members combine their diverse professional expertise to deliver end-to-end solutions that help businesses navigate legal issues effectively.
        </p>
      </div>
    </section>

    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="bg-card border border-border rounded-sm p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-blue-soft flex items-center justify-center border-2 border-blue-soft">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="font-display text-3xl font-bold text-navy/60">{m.initials}</span>
                )}
              </div>
              <div className="mt-5 pb-3 border-b border-border">
                <h3 className="font-display font-bold text-navy text-lg">{m.name}</h3>
              </div>
              <p className="mt-3 text-sm italic text-muted-foreground leading-snug">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
