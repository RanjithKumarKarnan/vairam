import { Link } from "react-router-dom";
import { ArrowRight, Gift, Truck, Sparkles, Gem } from "lucide-react";
import { useInView } from "../hooks/useInView";

const offers = [
  {
    icon: Gem,
    title: "Custom Design",
    description:
      "Bring your sketch, photo, or dream — we'll craft it in gold. Any design, any budget.",
    cta: "Start Designing",
    to: "/contact",
  },
  {
    icon: Gift,
    title: "Temple Donations",
    description:
      "We hold a prominent position in making Temple jewellery for donations to sacred temples across India.",
    cta: "Learn More",
    to: "/contact",
  },
  {
    icon: Truck,
    title: "Global Delivery",
    description:
      "We deliver the finest ornaments to any corner of the globe with prompt, guaranteed delivery.",
    cta: "Order Now",
    to: "/contact",
  },
  {
    icon: Sparkles,
    title: "Bespoke Ornaments",
    description:
      "Your own picture transformed into a one-of-a-kind jewel — the most personal gift imaginable.",
    cta: "Enquire",
    to: "/contact",
  },
];

export default function Offers() {
  const { ref, inView } = useInView();

  return (
    <section id="offers" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="section-label">Special Services</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title text-obsidian">
            Crafted for
            <br />
            <em className="font-light italic">You, Uniquely</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => {
            const { ref: cardRef, inView: cardInView } = useInView();
            return (
              <div
                key={offer.title}
                ref={cardRef}
                className={`group bg-cream border border-light-gray p-8 hover:border-gold hover:shadow-lg transition-all duration-500 ${
                  cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-light-gray group-hover:border-gold flex items-center justify-center mb-6 transition-colors duration-300">
                  <offer.icon
                    size={18}
                    className="text-warm-gray group-hover:text-gold transition-colors duration-300"
                  />
                </div>

                <h3 className="font-display text-xl font-light text-obsidian mb-3">
                  {offer.title}
                </h3>
                <p className="font-body text-xs text-warm-gray leading-relaxed font-light mb-6">
                  {offer.description}
                </p>

                <Link
                  to={offer.to}
                  className="inline-flex items-center gap-2 text-xs tracking-extra-wide uppercase font-body font-medium text-obsidian hover:text-gold transition-colors duration-300"
                >
                  {offer.cta} <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-obsidian p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label text-gold mb-3">Limited Offer</p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-cream">
              First Consultation,
              <em className="italic"> Absolutely Free</em>
            </h3>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold text-obsidian text-xs tracking-extra-wide uppercase font-body font-medium px-10 py-5 hover:bg-gold-dark transition-all duration-300"
          >
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}