import { Link } from "react-router-dom";

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
  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="border-y border-white/10 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8)
            .fill(
              "✦ Luxury Jewellery · Timeless Craftsmanship · Since 1980 · Premium Collections ✦"
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
                  Hallmark Certified
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

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
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

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[13px] text-white/45 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>

            <Link to="/terms-and-condition" className="text-[13px] text-white/45 hover:text-white transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}