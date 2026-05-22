import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    value:
      "Shree Laksmi Kreations, Trichy, Tamil Nadu, India",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9361660714",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@vairamjewellery.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat : 10:00 AM - 8:00 PM",
  },
];

const Contact = () => {
  return (
    <section className="bg-white min-h-screen pt-[120px] pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C6A769]" />

              <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
                Contact Us
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[62px] lg:text-[82px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
              Let’s Create
              <br />
              Something Timeless
            </h1>

            <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-2xl">
              Connect with our jewellery experts for custom designs,
              consultations, bridal collections, temple jewellery,
              and luxury handcrafted ornaments.
            </p>

            <div className="mt-14 space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 border-b border-black/8 pb-6"
                >
                  <div className="w-14 h-14 border border-[#C6A769]/25 flex items-center justify-center flex-shrink-0">
                    <item.icon
                      size={20}
                      className="text-[#C6A769]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[18px] tracking-[-0.03em] font-semibold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-black/60">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="border border-black/8 bg-[#fafafa] p-8 sm:p-10">
              <div className="mb-10">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-5">
                  Enquiry Form
                </p>

                <h2 className="text-[34px] sm:text-[42px] leading-[0.95] tracking-[-0.05em] font-semibold text-black">
                  Book A Consultation
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-3">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="John"
                      className="w-full h-14 border border-black/10 bg-white px-5 text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-3">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full h-14 border border-black/10 bg-white px-5 text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-14 border border-black/10 bg-white px-5 text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-3">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full h-14 border border-black/10 bg-white px-5 text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-3">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your jewellery requirement..."
                    className="w-full border border-black/10 bg-white px-5 py-4 text-[15px] text-black outline-none resize-none focus:border-[#C6A769] transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full h-14 bg-black text-white text-[11px] uppercase tracking-[0.24em] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#C6A769] hover:text-black transition-all duration-300"
                >
                  Send Enquiry

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 border border-[#C6A769]/20 bg-black overflow-hidden">
          <div className="px-8 sm:px-12 lg:px-16 py-12 sm:py-14">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-5">
              Luxury Jewellery Experience
            </p>

            <h2 className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[0.95] tracking-[-0.05em] font-semibold text-white">
              Crafted With
              <br />
              Passion & Precision
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-8 text-white/60 max-w-2xl">
              Experience timeless elegance with jewellery crafted for
              generations. From bridal collections to bespoke luxury
              designs, we bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;