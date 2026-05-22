import { useInView } from "../hooks/useInView";

const steps = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "Our experts source the finest stones and premium metals from trusted suppliers across the globe, ensuring unmatched quality and authenticity.",
  },
  {
    step: "02",
    title: "Assortment",
    description:
      "Every stone is carefully hand-selected and sorted by weight, cut, and clarity to create jewellery with exceptional brilliance.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "From timeless traditional pieces to elegant contemporary collections, every design reflects generations of artistry and sophistication.",
  },
  {
    step: "04",
    title: "Craftsmanship",
    description:
      "Our master craftsmen transform precious materials into luxurious masterpieces designed to be treasured for generations.",
  },
];

function StepCard({ step, index }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative border border-black/8 bg-white p-8 sm:p-10 transition-all duration-700 hover:border-[#C6A769]/40 hover:-translate-y-1 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center justify-between mb-10">
        <span className="text-[54px] sm:text-[64px] leading-none tracking-[-0.05em] font-semibold text-black/10 group-hover:text-[#C6A769]/30 transition-all duration-500">
          {step.step}
        </span>

        <div className="w-12 h-px bg-[#C6A769]" />
      </div>

      <h3 className="text-[26px] tracking-[-0.04em] font-semibold text-black">
        {step.title}
      </h3>

      <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-black/60">
        {step.description}
      </p>
    </div>
  );
}

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-black/5">
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
              Our Process
            </span>
          </div>

          <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
            From Stone
            <br />
            To Masterpiece
          </h2>

          <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-2xl">
            Every jewellery piece goes through a refined journey of sourcing,
            precision, design, and craftsmanship — transforming precious
            materials into timeless luxury creations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}