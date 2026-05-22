import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "../data/jewels";
import { useInView } from "../hooks/useInView";

function CollectionCard({ item, index }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/5] bg-gradient-to-br from-ivory to-light-gray border border-light-gray overflow-hidden mb-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-5xl text-gold/20 mb-3 font-display group-hover:text-gold/40 transition-colors duration-500">
              ✦
            </div>
            <p className="font-display text-base font-light text-obsidian/25 italic">
              {item.title}
            </p>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-obsidian text-cream text-[9px] tracking-ultra-wide uppercase font-body font-medium px-3 py-1.5">
          {item.tag}
        </div>

        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/10 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 bg-gold transition-all duration-500" />
      </div>

      <div>
        <p className="text-[10px] tracking-extra-wide uppercase font-body text-warm-gray font-medium mb-1">
          {item.subtitle}
        </p>
        <h3 className="font-display text-2xl font-light text-obsidian mb-3">
          {item.title}
        </h3>
        <p className="font-body text-xs text-warm-gray leading-relaxed font-light line-clamp-3">
          {item.description}
        </p>
        <Link
          to="/product"
          className="inline-flex items-center gap-2 mt-4 text-xs tracking-extra-wide uppercase font-body font-medium text-obsidian hover:text-gold transition-colors duration-300"
        >
          Explore <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

export default function Collections() {
  const { ref, inView } = useInView();

  return (
    <section id="jewels" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Our Collections</span>
            </div>
            <h2 className="section-title text-obsidian">
              Jewels for Every
              <br />
              <em className="font-light italic">Occasion & Soul</em>
            </h2>
          </div>
          <Link
            to="/product"
            className="btn-outline self-start md:self-auto flex-shrink-0"
          >
            View All Jewels <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <CollectionCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}