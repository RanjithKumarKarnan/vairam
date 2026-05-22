import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ivory/60" />
        <div className="absolute bottom-0 left-0 w-px h-2/3 bg-gold/20" />
        <div className="absolute top-1/3 right-1/4 w-px h-1/3 bg-gold/20" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-light-gray/80" />
        <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-light-gray/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <div className="gold-line" />
              <span className="section-label">Four Generations of Excellence</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] text-obsidian mb-8 animate-fade-up animate-delay-100">
              Where
              <br />
              <em className="text-gradient-gold not-italic">Tradition</em>
              <br />
              Meets Art
            </h1>

            <p className="section-subtitle max-w-md mb-10 animate-fade-up animate-delay-200">
              Our jewels resonate prosperity, purity and perfection — each
              crafted with opulence to enhance rich tradition and embrace
              current trends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <Link to="/product" className="btn-primary">
                Explore Collection <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Book Appointment
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-light-gray animate-fade-up animate-delay-400">
              {[
                { value: "4+", label: "Generations" },
                { value: "10K+", label: "Customers" },
                { value: "500+", label: "Designs" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-light text-obsidian">
                    {value}
                  </p>
                  <p className="text-[10px] tracking-extra-wide uppercase font-body text-warm-gray mt-1 font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in animate-delay-300">
            <div className="relative aspect-[3/4] max-w-sm ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-ivory via-gold/10 to-light-gray flex items-center justify-center border border-light-gray">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">✦</div>
                  <p className="font-display text-2xl font-light text-obsidian/40 italic">
                    Your jewel image here
                  </p>
                  <p className="text-xs text-warm-gray mt-2 font-body">
                    Replace with product photo
                  </p>
                </div>
              </div>

              <div className="absolute -left-10 bottom-16 bg-obsidian text-cream px-6 py-4 shadow-xl">
                <p className="text-[9px] tracking-ultra-wide uppercase text-gold font-body font-medium mb-1">
                  Heritage Since
                </p>
                <p className="font-display text-3xl font-light">1980s</p>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[9px] tracking-ultra-wide uppercase font-body text-warm-gray">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}