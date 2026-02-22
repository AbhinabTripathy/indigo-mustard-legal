import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Should you wish to discuss a legal matter, we welcome your inquiry.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form (display only) */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Briefly describe your inquiry"
                />
              </div>
              <button
                type="button"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-accent transition-colors duration-200"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Office Info & Map */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Office</h2>
            <div className="space-y-4 mb-8 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>DLF Cybercity, Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:pravinkumarhota@gmail.com" className="hover:text-primary transition-colors">
                  pravinkumarhota@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+918114394499" className="hover:text-primary transition-colors">
                  +91 81143 94499
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.098!2d85.819!3d20.296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDLF+Cybercity+Bhubaneswar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>

            <div className="mt-8 p-4 border border-border rounded-lg bg-secondary">
              <p className="text-xs text-muted-foreground/70">
                Disclaimer: This website is meant purely for informational purposes. The information provided does not constitute legal advice. Please seek independent legal advice for your specific matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
