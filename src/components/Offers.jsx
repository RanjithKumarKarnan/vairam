import { Link } from "react-router-dom";
import {
  ArrowRight,
  Gift,
  Truck,
  Sparkles,
  Gem,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const offers = [
  {
    icon: Gem,
    title: "Custom Design",
    description:
      "Transform your ideas, sketches, or inspirations into handcrafted luxury jewellery tailored perfectly for you.",
    cta: "Start Designing",
    to: "/contact",
  },
  {
    icon: Gift,
    title: "Temple Donations",
    description:
      "Trusted creators of sacred temple jewellery crafted for donations and spiritual offerings across India.",
    cta: "Learn More",
    to: "/contact",
  },
  {
    icon: Truck,
    title: "Global Delivery",
    description:
      "Secure and reliable worldwide delivery ensuring every masterpiece reaches you with care and elegance.",
    cta: "Order Now",
    to: "/contact",
  },
  {
    icon: Sparkles,
    title: "Bespoke Jewellery",
    description:
      "Create meaningful one-of-a-kind ornaments designed exclusively from your memories and inspirations.",
    cta: "Enquire",
    to: "/contact",
  },
];

function OfferCard({ offer, index }) {
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
      <div className="w-14 h-14 border border-[#C6A769]/25 flex items-center justify-center mb-8 group-hover:bg-[#C6A769] transition-all duration-300">
        <offer.icon
          size={20}
          className="text-[#C6A769] group-hover:text-black transition-colors duration-300"
        />
      </div>

      <h3 className="text-[26px] tracking-[-0.04em] font-semibold text-black">
        {offer.title}
      </h3>

      <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-black/60">
        {offer.description}
      </p>

      <Link
        to={offer.to}
        className="group/link inline-flex items-center gap-3 mt-8 text-[11px] uppercase tracking-[0.24em] font-semibold text-black hover:text-[#C6A769] transition-all duration-300"
      >
        {offer.cta}

        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </Link>
    </div>
  );
}

export default function Offers() {
  const { ref, inView } = useInView();

  return (
    <section
      id="offers"
      className="bg-[#fafafa] py-20 sm:py-28 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C6A769]" />

            <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
              Special Services
            </span>

            <div className="w-12 h-px bg-[#C6A769]" />
          </div>

          <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
            Crafted
            <br />
            Exclusively For You
          </h2>

          <p className="mt-8 text-[15px] sm:text-[17px] leading-8 text-black/60 max-w-2xl mx-auto">
            Experience personalised luxury jewellery services designed with
            elegance, craftsmanship, and generations of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.title}
              offer={offer}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 border border-[#C6A769]/20 bg-black overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 px-8 sm:px-12 lg:px-16 py-12 sm:py-14">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#C6A769] font-medium mb-5">
                Complimentary Consultation
              </p>

              <h3 className="text-[34px] sm:text-[46px] lg:text-[58px] leading-[0.95] tracking-[-0.05em] font-semibold text-white">
                Your First Design
                <br />
                Consultation Is Free
              </h3>

              <p className="mt-6 text-[15px] sm:text-[16px] leading-8 text-white/60 max-w-xl">
                Connect with our jewellery experts and begin your journey
                towards timeless handcrafted luxury.
              </p>
            </div>

            <Link
              to="/contact"
              className="group h-14 px-8 bg-[#C6A769] text-black text-[11px] uppercase tracking-[0.24em] font-semibold inline-flex items-center gap-3 transition-all duration-300 hover:bg-white"
            >
              Book Appointment

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}