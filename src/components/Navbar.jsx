import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Jewels", to: "/product" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // State for Gold & Silver rates (Ready for API integration)
  const [rates, setRates] = useState({ gold: "₹7,250", silver: "₹92" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500">

        <div className="bg-black py-2 overflow-hidden border-b border-white/10">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(10)
              .fill(`✦ GOLD: ${rates.gold}/G · SILVER: ${rates.silver}/G ✦`)
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

        <div
          className={`transition-all duration-500 ${menuOpen
            ? "bg-transparent"
            : scrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/10"
              : "bg-transparent"
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
              aria-label="Vairam Home"
            >
              <img
                src="/Logo.png"
                alt="Vairam Diamond Jewellery Store"
                className={`h-12 w-auto object-contain transition-all duration-300 ${menuOpen ? "brightness-0 invert" : "brightness-0"
                  }`}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  end={label === "Home"}
                  className={({ isActive }) =>
                    `text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 relative group ${isActive ? "text-[#C6A769]" : "text-black hover:text-[#C6A769]"
                    }`
                  }
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C6A769] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center bg-black text-white text-[10px] tracking-[0.2em] uppercase font-medium px-6 py-3.5 transition-all duration-300 hover:bg-[#C6A769] hover:text-black"
              >
                Book Appointment
              </Link>

              <button
                className="hidden lg:flex items-center justify-center w-10 h-10 border border-black/20 hover:border-[#C6A769] hover:text-[#C6A769] text-black transition-all duration-300"
                aria-label="Cart"
              >
                <ShoppingBag size={16} />
              </button>

              <button
                className={`lg:hidden flex items-center justify-center p-2 transition-colors duration-300 ${menuOpen ? "text-white" : "text-black"
                  }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col lg:hidden transition-all duration-500 ${menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light text-white hover:text-[#C6A769] transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 border border-[#C6A769] text-[#C6A769] text-[11px] tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-[#C6A769] hover:text-black transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}