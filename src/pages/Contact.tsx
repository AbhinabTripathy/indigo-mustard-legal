import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => (
  <div>
    <section className="bg-blue-tint border-b border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Contact</div>
        <h1 className="font-display font-black text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
          Reach the Firm.
        </h1>
        <div className="mt-6 h-[3px] w-24 bg-accent" />
        <p className="mt-6 max-w-2xl text-foreground/75 leading-relaxed md:text-lg">
          Should you wish to discuss a matter, we welcome your enquiry through any of the channels below.
        </p>
      </div>
    </section>

    <section className="bg-background">
      <div className="container mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Send a message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy resize-none"
                  placeholder="Briefly describe your enquiry"
                />
              </div>
              <button
                type="button"
                className="px-6 py-3 bg-navy text-white font-medium rounded-sm hover:bg-navy-deep transition-colors"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Office</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="text-navy font-medium">Law Offices of Pravin Hota</div>
                  <div className="text-foreground/75 text-sm">Bhubaneswar, Odisha, India</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                <div className="flex flex-col text-foreground/85 text-sm">
                  <a href="tel:+918114394499" className="hover:text-navy">+91 8114394499</a>
                  <a href="tel:+917681857934" className="hover:text-navy">+91 7681857934</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:office@pravinhota.in" className="hover:text-navy text-sm">office@pravinhota.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground/85">www.pravinhota.in</span>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location — Bhubaneswar"
              />
            </div>

            <div className="mt-6 p-4 border border-border rounded-sm bg-blue-soft/50">
              <p className="text-xs text-foreground/70 leading-relaxed">
                Disclaimer: This website is meant purely for informational purposes and is not intended to advertise, solicit clients, or invite a lawyer-client relationship. The contents do not constitute legal advice; please seek independent legal advice for your specific matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
