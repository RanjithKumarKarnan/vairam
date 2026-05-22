import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Jewels", to: "/product" },
  { label: "About", to: "/#about" },
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-light-gray"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-light tracking-widest text-obsidian group-hover:text-gold transition-colors duration-300">
              VAIRAM
            </span>
            <span className="text-[9px] tracking-ultra-wide uppercase font-body text-warm-gray font-medium">
              Shree Laksmi Kreations
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `text-xs tracking-extra-wide uppercase font-body font-medium transition-colors duration-300 relative group ${
                    isActive ? "text-gold" : "text-obsidian hover:text-gold"
                  }`
                }
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-primary text-[10px] px-6 py-3"
            >
              Book Appointment
            </Link>
            <button
              className="hidden lg:flex items-center justify-center w-10 h-10 border border-light-gray hover:border-gold hover:text-gold text-obsidian transition-all duration-300"
              aria-label="Cart"
            >
              <ShoppingBag size={16} />
            </button>

            <button
              className="lg:hidden flex items-center justify-center p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col lg:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <div className="flex flex-col leading-none text-center mb-6">
            <span className="font-display text-4xl font-light tracking-widest text-cream">
              VAIRAM
            </span>
            <span className="text-[9px] tracking-ultra-wide uppercase font-body text-gold font-medium mt-1">
              Shree Laksmi Kreations
            </span>
          </div>

          {navLinks.map(({ label, to }, i) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-light text-cream hover:text-gold transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-gold text-gold text-xs tracking-extra-wide uppercase font-body font-medium px-10 py-4 hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}