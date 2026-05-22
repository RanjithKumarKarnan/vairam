import { whyVairam } from "../data/jewels";
import { useInView } from "../hooks/useInView";

function FeatureCard({ item, index }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group border border-black/8 bg-white p-8 sm:p-10 transition-all duration-700 hover:border-[#C6A769]/40 hover:-translate-y-1 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center justify-between mb-10">
        <span className="text-[54px] sm:text-[64px] leading-none tracking-[-0.05em] font-semibold text-black/10 group-hover:text-[#C6A769]/30 transition-all duration-500">
          {item.number}
        </span>

        <div className="w-12 h-px bg-[#C6A769]" />
      </div>

      <h3 className="text-[26px] tracking-[-0.04em] font-semibold text-black">
        {item.title}
      </h3>

      <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-black/60">
        {item.description}
      </p>
    </div>
  );
}

export default function WhyVairam() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C6A769]" />

            <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
            The Vairam
            <br />
            Promise
          </h2>

          <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-2xl">
            Experience exceptional craftsmanship, trusted heritage, and
            timeless jewellery collections designed with elegance and
            precision for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {whyVairam.map((item, i) => (
            <FeatureCard
              key={item.number}
              item={item}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}