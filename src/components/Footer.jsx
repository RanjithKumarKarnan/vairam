import { Link } from "react-router-dom";
const footerLinks = {
  Explore: [
    { label: "Home", to: "/" },
    { label: "Our Jewels", to: "/product" },
    { label: "About Us", to: "/#about" },
    { label: "Contact", to: "/contact" },
  ],
  Collections: [
    { label: "Temple Jewellery", to: "/product" },
    { label: "Bridal Collection", to: "/product" },
    { label: "Diamond Jewels", to: "/product" },
    { label: "Contemporary", to: "/product" },
  ],
  Services: [
    { label: "Custom Design", to: "/contact" },
    { label: "Book Appointment", to: "/contact" },
    { label: "Temple Donations", to: "/contact" },
    { label: "Global Delivery", to: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream">
      <div className="border-y border-charcoal overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8)
            .fill("✦  Tradition  ·  Craftsmanship  ·  Excellence  ·  Four Generations  ")
            .map((text, i) => (
              <span
                key={i}
                className="mx-4 text-xs tracking-extra-wide uppercase font-body text-gold/60 font-light"
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-display text-4xl font-light tracking-widest text-cream">
                VAIRAM
              </p>
              <p className="text-[9px] tracking-ultra-wide uppercase font-body text-gold font-medium mt-1">
                Shree Laksmi Kreations
              </p>
            </div>
            <p className="font-body text-sm text-warm-gray font-light leading-relaxed max-w-xs mb-8">
              The trusted destination for jewels across the globe, for more than
              four generations. Our unique blend of tradition and contemporary
              designs has made us stand distinctly ahead of the competition.
            </p>

          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="section-label text-gold mb-6">{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="font-body text-sm text-warm-gray hover:text-cream transition-colors duration-300 font-light"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-charcoal mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-gray font-light">
            © {new Date().getFullYear()} Vairam Jewels · Shree Laksmi Kreations. All rights reserved.
          </p>
          <p className="font-body text-xs text-warm-gray font-light">
            Hallmark Certified · ISO Quality Assured
          </p>
        </div>
      </div>
    </footer>
  );
}