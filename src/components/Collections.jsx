import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "../data/jewels";
import { useInView } from "../hooks/useInView";

function CollectionCard({ item, index }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="overflow-hidden border border-black/10 bg-white">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

          {/* <div className="absolute top-5 left-5">
            <span className="bg-black text-white px-4 py-2 text-[10px] uppercase tracking-[0.24em] font-medium">
              {item.tag}
            </span>
          </div> */}
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#C6A769] font-medium mb-3">
            {item.subtitle}
          </p>

          <h3 className="text-[26px] tracking-[-0.04em] font-semibold text-black">
            {item.title}
          </h3>

          <p className="mt-4 text-[14px] leading-7 text-black/60 line-clamp-3">
            {item.description}
          </p>

          <Link
            to="/product"
            className="group/link inline-flex items-center gap-3 mt-6 text-[11px] uppercase tracking-[0.24em] font-semibold text-black hover:text-[#C6A769] transition-all duration-300"
          >
            Explore Collection

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  const { ref, inView } = useInView();

  return (
    <section
      id="jewels"
      className="bg-[#fafafa] py-20 sm:py-28 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C6A769]" />

              <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
                Our Collections
              </span>
            </div>

            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
              Jewellery For
              <br />
              Every Occasion
            </h2>
          </div>

          <Link
            to="/product"
            className="group h-12 px-7 border border-black/10 text-black text-[11px] uppercase tracking-[0.22em] font-semibold inline-flex items-center gap-3 hover:border-[#C6A769] hover:text-[#C6A769] transition-all duration-300"
          >
            View All Collections

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {collections.map((item, index) => (
            <CollectionCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}