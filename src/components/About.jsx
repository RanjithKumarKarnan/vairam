import { useInView } from "../hooks/useInView";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Trusted jewellers across the globe for 4+ generations",
  "Prominent makers of Temple jewellery for sacred donations",
  "Custom bespoke designs from your own sketches or photos",
  "One-stop shop across all socio-economic diversities",
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="relative">
              <div className="aspect-square max-w-md bg-gradient-to-br from-ivory to-light-gray border border-light-gray flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="text-7xl text-gold/30 font-display mb-4">✦</div>
                  <p className="font-display text-xl font-light text-obsidian/30 italic">
                    Craftsmen at work
                  </p>
                  <p className="text-xs text-warm-gray mt-2 font-body">
                    Replace with workshop / store photo
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-obsidian flex flex-col items-center justify-center text-center p-6">
                <p className="font-display text-5xl font-light text-gold">4</p>
                <p className="text-[9px] tracking-ultra-wide uppercase font-body text-cream/60 font-medium mt-2">
                  Generations of Trust
                </p>
              </div>

              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line" />
              <span className="section-label">Our Story</span>
            </div>

            <h2 className="section-title text-obsidian mb-6">
              Trusted Jewellers,
              <br />
              <em className="font-light italic">Across the Globe</em>
            </h2>

            <p className="section-subtitle mb-6">
              We are the trusted destination for jewels across the globe, for
              more than four generations. Our unique blend of tradition and
              contemporary designs has made us stand distinctly ahead of the
              competition.
            </p>

            <p className="section-subtitle mb-10">
              Started as renowned goldsmiths of Trichy, we flourished through
              word of mouth. Our family has donated jewels to the Srirangam
              temples — a testimony of our devotion to both craft and culture.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-warm-gray font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center">
                <span className="font-display text-lg text-gold">✦</span>
              </div>
              <div>
                <p className="font-display text-base font-medium text-obsidian italic">
                  Shree Laksmi Kreations
                </p>
                <p className="text-[10px] tracking-extra-wide uppercase font-body text-warm-gray font-medium">
                  Est. Trichy, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}