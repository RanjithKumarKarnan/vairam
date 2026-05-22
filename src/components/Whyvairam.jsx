import { whyVairam } from "../data/jewels";
import { useInView } from "../hooks/useInView";

function FeatureCard({ item, index }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`group border-t border-light-gray pt-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-display text-5xl font-light text-light-gray group-hover:text-gold/30 transition-colors duration-500">
          {item.number}
        </span>
        <div className="w-8 h-px bg-gold mt-3" />
      </div>
      <h3 className="font-display text-2xl font-light text-obsidian mb-3">
        {item.title}
      </h3>
      <p className="font-body text-sm text-warm-gray leading-relaxed font-light">
        {item.description}
      </p>
    </div>
  );
}

export default function WhyVairam() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`max-w-2xl mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="section-label">Why Choose Us</span>
          </div>
          <h2 className="section-title text-obsidian">
            The Vairam
            <br />
            <em className="font-light italic">Promise</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {whyVairam.map((item, i) => (
            <FeatureCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}