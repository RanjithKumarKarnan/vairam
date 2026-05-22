import { useInView } from "../hooks/useInView";

const steps = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "Our experts connect with top-notch suppliers across the globe, sourcing the finest stones and high-quality metals that excel in quality, robustness, and authenticity.",
  },
  {
    step: "02",
    title: "Assortment",
    description:
      "Every single stone in your piece has been hand-picked by a specially trained team, sorted based on weight, cut, and clarity to ensure a flawless creation.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "From intricate nose-pins to grand hip-belts, our designs span traditional, contemporary, fusion, and lightweight — each one a reflection of our four-generation legacy.",
  },
  {
    step: "04",
    title: "Craftsmanship",
    description:
      "We bring life to your designs, replicating the world's most complicated forms. It takes enormous love, passion, and skill to create a masterpiece that travels through generations.",
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`max-w-2xl mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <span className="section-label">Our Process</span>
          </div>
          <h2 className="section-title text-obsidian">
            From Stone
            <br />
            <em className="font-light italic">to Masterpiece</em>
          </h2>
          <p className="section-subtitle mt-4 max-w-lg">
            The journey of a stone or metal into a beautiful ornament is a
            magnificent one — it passes through multiple stages of refinement,
            destined to stay for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => {
            const { ref: stepRef, inView: stepInView } = useInView();
            return (
              <div
                key={step.step}
                ref={stepRef}
                className={`relative p-8 border-t-2 transition-all duration-700 ${stepInView
                    ? "opacity-100 translate-y-0 border-gold"
                    : "opacity-0 translate-y-8 border-light-gray"
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-6">
                  <span className="font-display text-6xl font-light text-light-gray">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light text-obsidian mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-warm-gray leading-relaxed font-light">
                  {step.description}
                </p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <div className="w-6 h-px bg-gold" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}