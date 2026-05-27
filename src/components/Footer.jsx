import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const footerLinks = {
  Explore: [
    { label: "Home", to: "/" },
    { label: "Our Collections", to: "/product" },
    { label: "About Us", to: "/#about" },
    { label: "Contact", to: "/contact" },
  ],
  Collections: [
    { label: "Temple Jewellery", to: "/product" },
    { label: "Bridal Collection", to: "/product" },
    { label: "Diamond Jewellery", to: "/product" },
    { label: "Luxury Gold", to: "/product" },
  ],
  Services: [
    { label: "Custom Design", to: "/contact" },
    { label: "Book Appointment", to: "/contact" },
    { label: "Global Delivery", to: "/contact" },
    { label: "Temple Donations", to: "/contact" },
  ],
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const whatsappMessage = "Hello Vairam Jewellery! I would like to know more about your collections.";
  const whatsappURL = `https://wa.me/919789564111?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-black text-white overflow-hidden relative">
        <div className="border-y border-white/10 py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(8)
              .fill(
                "✦ Luxury Jewellery · Timeless Craftsmanship · Since 2012 – Fine Diamond Jewellery✦"
              )
              .map((text, i) => (
                <span
                  key={i}
                  className="mx-5 text-[10px] uppercase tracking-[0.32em] text-[#C6A769] font-medium"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-14 lg:gap-10">
            <div className="xl:col-span-2">
              <Link
                to="/"
                className="inline-flex items-center mb-8"
                aria-label="Vairam Home"
              >
                <img
                  src="/Logo.png"
                  alt="Vairam Jewellery"
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </Link>

              <p className="text-[15px] leading-8 text-white/60 max-w-md">
                Trusted jewellers for generations, blending timeless tradition
                with modern luxury craftsmanship from Trichy to customers across
                the globe.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <div className="border border-[#C6A769]/25 px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#C6A769] font-medium">
                    100% HUID Certified
                  </p>
                </div>

                <div className="border border-white/10 px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/60 font-medium">
                    Premium Quality
                  </p>
                </div>
              </div>
            </div>

            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-7">
                  {heading}
                </h3>

                <ul className="space-y-4">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-[15px] text-white/60 hover:text-white transition-colors duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <img
                src="/favicon.png"
                alt="Logo"
                className="w-5 h-5 object-contain"
              />

              <p className="text-[13px] text-white/45">
                © {new Date().getFullYear()} Vairam Jewellery · Shree Laksmi
                Kreations
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
              <Link
                to="/privacy-policy"
                className="text-[13px] text-white/45 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-condition"
                className="text-[13px] text-white/45 hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>

              <Link
                to="https://rancotechnology.com/"
                target="_blank"
                className="text-[13px] text-white/45 hover:text-white transition-colors duration-300"
              >
                Developed by Ranco Tech
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Action Buttons (Independent Positioning) ── */}

      {/* WhatsApp Button - Glides up when scrolled down */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 ${showScrollTop ? "bottom-22 sm:bottom-24" : "bottom-6"
          }`}
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>

      {/* Scroll to Top Button - Fades and slides in */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#C6A769] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-500 ${showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}