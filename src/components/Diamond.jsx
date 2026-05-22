import { diamondCs } from "../data/jewels";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

export default function Diamonds() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section id="diamonds" className="py-28 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end gap-6 justify-between mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label text-gold">Diamonds</span>
            </div>
            <h2 className="section-title text-cream">
              The 4Cs of a
              <br />
              <em className="font-light italic text-gradient-gold">Diamond</em>
            </h2>
          </div>
          <p className="font-body text-sm text-warm-gray font-light max-w-sm leading-relaxed">
            Standardised globally in the 20th century, the 4Cs make diamonds
            not only a fine ornament, but the finest investment for generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-0">
            {diamondCs.map((item, i) => (
              <button
                key={item.word}
                onClick={() => setActive(i)}
                className={`flex items-center gap-6 py-6 border-b text-left group transition-all duration-300 ${active === i
                    ? "border-gold"
                    : "border-charcoal hover:border-warm-gray"
                  }`}
              >
                <span
                  className={`font-display text-5xl font-light transition-colors duration-300 w-16 flex-shrink-0 ${active === i ? "text-gold" : "text-charcoal group-hover:text-warm-gray"
                    }`}
                >
                  {item.letter}
                </span>
                <div>
                  <p
                    className={`font-display text-2xl font-light transition-colors duration-300 ${active === i ? "text-cream" : "text-warm-gray group-hover:text-cream/70"
                      }`}
                  >
                    {item.word}
                  </p>
                  {active === i && (
                    <p className="font-body text-xs text-warm-gray font-light mt-1 leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  )}
                </div>
                {active === i && (
                  <div className="ml-auto w-8 h-px bg-gold flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-charcoal animate-float" />
              <div className="absolute inset-8 rounded-full border border-charcoal/50 animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-16 rounded-full border border-gold/20 animate-float" style={{ animationDelay: "2s" }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl text-gradient-gold font-display mb-2 animate-float">
                    ◇
                  </div>
                  <p className="font-display text-3xl font-light text-cream">
                    {diamondCs[active].word}
                  </p>
                  <p className="text-[9px] tracking-ultra-wide uppercase font-body text-gold font-medium mt-1">
                    The {active + 1}{active === 0 ? "st" : active === 1 ? "nd" : active === 2 ? "rd" : "th"} C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}