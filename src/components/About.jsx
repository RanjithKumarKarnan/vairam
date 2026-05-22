import { useInView } from "../hooks/useInView";
import { Check } from "lucide-react";

const highlights = [
  "Trusted jewellers across the globe for 4+ generations",
  "Prominent makers of Temple jewellery for sacred donations",
  "Custom bespoke designs from your own sketches or photos",
  "One-stop luxury destination for timeless collections",
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white py-12 sm:py-16 border-b border-black/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`transition-all duration-1000 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative max-w-[520px]">
              <div className="border border-[#C6A769]/25 p-3 bg-white">
                <img
                  src="/gold/one.avif"
                  alt="Jewellery Craftsmanship"
                  className="w-full h-[420px] sm:h-[560px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 right-0 bg-black text-white px-8 py-7 border border-[#C6A769]/20">
                <p className="text-[42px] leading-none font-semibold tracking-[-0.04em]">
                  40+
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/60 font-medium">
                  Years Legacy
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C6A769]" />

              <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-[38px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-[-0.06em] font-semibold text-black max-w-2xl">
              Crafted With
              <br />
              Heritage &
              <br />
              Elegance
            </h2>

            <p className="mt-8 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-black/65 max-w-2xl">
              We are trusted jewellers serving generations with timeless
              craftsmanship, luxury collections, and exceptional artistry.
              Every jewellery piece reflects tradition blended with modern
              sophistication.
            </p>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-black/65 max-w-2xl">
              From renowned goldsmiths in Trichy to a globally trusted
              jewellery destination, our legacy continues through dedication,
              precision, and handcrafted excellence.
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-black/5 pb-5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C6A769] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-black" />
                  </div>

                  <p className="text-[14px] sm:text-[15px] leading-7 text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-12 pt-8 border-t border-black/10">
              <div className="w-14 h-14 border border-[#C6A769]/30 bg-black flex items-center justify-center">
                <span className="text-[#C6A769] text-xl">✦</span>
              </div>

              <div>
                <h4 className="text-[18px] tracking-[-0.03em] font-semibold text-black">
                  Shree Laksmi Kreations
                </h4>

                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-black/45 font-medium">
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