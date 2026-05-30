import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

// Custom SVG Icons to replace the removed Lucide brand icons
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Jewels", to: "/product" },
  { label: "Saving Scheme", to: "/saving-scheme" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className="bg-black py-2 border-b border-white/10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
            <span className="text-[7.5px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[#C6A769] font-medium truncate pr-2">
              Vairam Jewellery · Shree Laksmi Kreations
            </span>
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a href="https://www.facebook.com/share/1D6gAGoo9K/?mibextid=wwXIfr" className="text-white/70 hover:text-[#C6A769] transition-colors duration-300" target="_blank" aria-label="Facebook">
                <FacebookIcon size={14} />
              </a>
              <a href="https://www.instagram.com/southindianjewellery?igsh=MTFyZ2cyd3AybTc3aA==" className="text-white/70 hover:text-[#C6A769] transition-colors duration-300" target="_blank" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
            </div>
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
        <div className="flex flex-col items-center justify-center h-full gap-8 font-serif mt-26">
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

          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.facebook.com/share/1D6gAGoo9K/?mibextid=wwXIfr" className="text-white/60 hover:text-[#C6A769] transition-colors duration-300" target="_blank" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href="https://www.instagram.com/southindianjewellery?igsh=MTFyZ2cyd3AybTc3aA==" className="text-white/60 hover:text-[#C6A769] transition-colors duration-300" target="_blank" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}