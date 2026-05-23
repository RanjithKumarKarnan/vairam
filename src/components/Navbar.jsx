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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${menuOpen
            ? "bg-transparent" // Keeps header transparent when menu is open so it blends with the dark overlay
            : scrolled
              ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-light-gray"
              : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center" aria-label="Vairam Home">
            <img
              src="/Logo.png"
              alt="Vairam Diamond Jewellery Store"
              // Inverts the logo to white when the dark mobile menu is open
              className={`h-12 w-auto object-contain transition-all duration-300 ${menuOpen ? "brightness-0 invert" : "brightness-0"
                }`}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={label === "Home"}
                className={({ isActive }) =>
                  `text-xs tracking-[0.2em] uppercase font-body font-medium transition-colors duration-300 relative group ${isActive ? "text-gold" : "text-obsidian hover:text-gold"
                  }`
                }
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-primary text-[10px] px-5 py-3"
            >
              Book Appointment
            </Link>
            <button
              className="hidden lg:flex items-center justify-center w-10 h-10 border border-light-gray hover:border-gold hover:text-gold text-obsidian transition-all duration-300"
              aria-label="Cart"
            >
              <ShoppingBag size={16} />
            </button>

            {/* Hamburger */}
            <button
              className={`lg:hidden flex items-center justify-center p-2 transition-colors duration-300 ${menuOpen ? "text-cream" : "text-obsidian"
                }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col lg:hidden transition-all duration-500 ${menuOpen
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
              className="font-display text-3xl font-light text-cream hover:text-gold transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-gold text-gold text-xs tracking-[0.2em] uppercase font-body font-medium px-10 py-4 hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}