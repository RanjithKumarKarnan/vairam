import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    value: "75/C, Shristi Court, Salai Road, Opp. UCO Bank, Trichy - 03.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 94438 36161 - 94433 44739 - 99945 55896",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "shreelakshmikreations@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: (
      <div className="flex flex-col gap-0.5 mt-0.5">
        <span>Mon - Sat : 11:00 AM - 8:00 PM</span>
        <span className="text-[12.5px] opacity-75">Lunch Break : 2:30 PM - 5:00 PM</span>
        <span className="text-[#C6A769] font-medium pt-1">Sunday : Holiday</span>
      </div>
    ),
  },
];

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0j5HSOd2GtCYfyo79ucWD6tfMu-ijp9wk2bfxB0gqemA7Aja20D0RupPH-peuU36dSA/exec";

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white min-h-screen pt-[100px] pb-20 sm:pb-28 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C6A769]" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
                Contact Us
              </span>
            </div>

            <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
              Let’s Create
              <br />
              Something Timeless
            </h1>

            <p className="mt-6 sm:mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-2xl">
              Connect with our jewellery experts for custom designs,
              consultations, bridal collections, temple jewellery,
              and luxury handcrafted ornaments.
            </p>

            <div className="mt-12 sm:mt-14 space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-5 border-b border-black/8 pb-6"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[#C6A769]/25 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-[#C6A769]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] sm:text-[18px] tracking-[-0.03em] font-semibold text-black">
                      {item.title}
                    </h3>
                    <div className="mt-1 sm:mt-2 text-[14px] leading-6 sm:leading-7 text-black/60 break-words">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="border border-black/8 bg-[#fafafa] p-6 sm:p-10">
              <div className="mb-8 sm:mb-10">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-4 sm:mb-5">
                  Enquiry Form
                </p>
                <h2 className="text-[30px] sm:text-[42px] leading-[0.95] tracking-[-0.05em] font-semibold text-black">
                  Book A Consultation
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-2 sm:mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Shree"
                      className="w-full h-12 sm:h-14 border border-black/10 bg-white px-5 text-[14px] sm:text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-2 sm:mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Laksmi"
                      className="w-full h-12 sm:h-14 border border-black/10 bg-white px-5 text-[14px] sm:text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-2 sm:mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full h-12 sm:h-14 border border-black/10 bg-white px-5 text-[14px] sm:text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-2 sm:mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 0000000000"
                    className="w-full h-12 sm:h-14 border border-black/10 bg-white px-5 text-[14px] sm:text-[15px] text-black outline-none focus:border-[#C6A769] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.24em] text-black/50 font-medium mb-2 sm:mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your jewellery requirement..."
                    className="w-full border border-black/10 bg-white px-5 py-4 text-[14px] sm:text-[15px] text-black outline-none resize-none focus:border-[#C6A769] transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full h-12 sm:h-14 bg-black text-white text-[11px] uppercase tracking-[0.24em] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#C6A769] hover:text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                  {!isSubmitting && (
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-[13px] font-medium text-center mt-4">
                    Thank you! Your enquiry has been sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-[13px] font-medium text-center mt-4">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 border border-[#C6A769]/20 bg-black overflow-hidden">
          <div className="px-6 sm:px-12 lg:px-16 py-10 sm:py-14">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-4 sm:mb-5">
              Luxury Jewellery Experience
            </p>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.05em] font-semibold text-white">
              Crafted With
              <br />
              Passion & Precision
            </h2>
            <p className="mt-5 sm:mt-6 text-[14px] sm:text-[16px] leading-7 sm:leading-8 text-white/60 max-w-2xl">
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