import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, Globe, Scale, Briefcase, FileText, Shield, Gavel, BookOpen } from "lucide-react";
import heroImg from "@/assets/hero-cover.png.asset.json";
import logoMark from "@/assets/logo-mark.png.asset.json";

const practiceAreas = [
  { icon: Briefcase, title: "Corporate Law" },
  { icon: Scale, title: "Dispute Resolution & Arbitration" },
  { icon: Gavel, title: "Criminal & White-Collar" },
  { icon: FileText, title: "Contract Lifecycle" },
  { icon: Shield, title: "Regulatory & Compliance" },
  { icon: BookOpen, title: "IP & Consumer Protection" },
];

const Index = () => (
  <div>
    {/* HERO — light-blue tint, deconstructed geometric layout inspired by the PDF cover */}
    <section className="relative bg-navy-deep overflow-hidden">
      {/* Cover image with the dark geometric corner */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImg.url}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/20" />
        {/* Black diagonal panel echoing the cover artwork */}
        <div
          className="absolute right-0 bottom-0 w-1/2 h-3/5 bg-navy-deep"
          style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="container mx-auto relative py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-accent/15 blur-md" aria-hidden="true" />
                <img
                  src={logoMark.url}
                  alt="Law Offices of Pravin Hota emblem"
                  className="relative w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg"
                />
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/70 leading-relaxed">
                Advocates &amp; Legal Consultants<br />Bhubaneswar
              </div>
            </div>

            <h1 className="font-display font-black text-white leading-[0.95] text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl">
              LAW OFFICES OF<br />
              <span className="text-accent">PRAVIN HOTA</span>
            </h1>
            <div className="mt-6 h-[3px] w-24 bg-accent" />
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
              A full-service law firm delivering comprehensive legal and allied services to businesses at every stage — from formation to expansion.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-navy-deep rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                About the Firm
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <Phone size={15} className="text-accent" />
                8114394499, 7681857934
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail size={15} className="text-accent" />
                office@pravinhota.in
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Globe size={15} className="text-accent" />
                www.pravinhota.in
              </div>
            </div>
          </div>

          {/* Oversized watermark emblem on the dark panel */}
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <img
              src={logoMark.url}
              alt=""
              aria-hidden="true"
              className="w-72 xl:w-96 object-contain opacity-90 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>


    {/* INTRO STRIP */}
    <section className="bg-background border-b border-border">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">The Firm</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
              End-to-end legal &amp; allied services.
            </h2>
          </div>
          <div className="md:col-span-3 text-foreground/75 leading-relaxed space-y-4 md:text-lg">
            <p>
              Based in Bhubaneswar, the Law Offices of Pravin Hota serves clients with business interests and legal issues across the Bhubaneswar–Cuttack region, throughout Odisha, and through its associate offices across India.
            </p>
            <p>
              The Firm functions as a collective of like-minded professionals, bringing together diverse areas of knowledge and practice to serve clients in a coordinated and effective manner.
            </p>
            <Link to="/about" className="inline-flex items-center gap-1 text-navy font-medium hover:text-accent transition-colors">
              Read the full profile <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* PRACTICE AREAS GRID */}
    <section className="bg-blue-tint">
      <div className="container mx-auto py-16 md:py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Practice Areas</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Where we work</h2>
          </div>
          <Link to="/practice-areas" className="text-navy font-medium hover:text-accent inline-flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-card p-7 rounded-sm border border-border hover:border-navy hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-sm bg-blue-soft flex items-center justify-center mb-5 group-hover:bg-navy transition-colors">
                <area.icon size={20} className="text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy">{area.title}</h3>
              <div className="mt-4 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CONTRACT MANAGEMENT CTA */}
    <section className="bg-navy text-white">
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/60 mb-3">Contract Lifecycle Management</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-5">
              Contracts, from draft to renewal — organised, tracked, and enforceable.
            </h2>
            <p className="text-white/75 leading-relaxed">
              Contract management is more than drafting. It involves revisions, approvals, stamping, notarisation, storage, and timely renewals. We help businesses manage every phase in a reliable and organised manner.
            </p>
            <Link
              to="/contract-management"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-md font-medium hover:bg-blue-soft transition-colors"
            >
              Explore the practice <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Creation", "Execution", "Post-Execution"].map((phase, i) => (
              <div key={phase} className="border border-white/15 p-5 rounded-sm">
                <div className="text-3xl font-display font-black text-white/90">0{i + 1}</div>
                <div className="mt-3 text-sm text-white/80">{phase}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CONTACT SNAPSHOT */}
    <section className="bg-background">
      <div className="container mx-auto py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-2">Get in Touch</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready when you need considered counsel.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-6">
            Should you wish to reach the Firm to discuss a matter, we welcome your enquiry.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-md font-medium hover:bg-navy-deep transition-colors"
          >
            Contact the Firm <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
