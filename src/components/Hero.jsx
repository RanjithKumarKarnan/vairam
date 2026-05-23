import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image: "/gold/one.avif",
    title: "Luxury Gold Collection",
    subtitle: "Timeless Jewellery Crafted For Elegance",
  },
  {
    image: "/gold/1.avif",
    title: "Exclusive Diamond Pieces",
    subtitle: "Premium Designs With Modern Sophistication",
  },
  {
    image: "/gold/2.avif",
    title: "Wedding Collections",
    subtitle: "Celebrate Every Moment With Luxury",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white border-b border-black/5 pt-[115px]">
      <div className="w-full">
        <div className="relative overflow-hidden">
          <img
            src={slides[current].image}
            alt="Luxury Jewellery"
            className="w-full h-[64vh] lg:h-[74vh] object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 sm:w-14 h-px bg-[#C6A769]" />

                  <span className="text-white/90 text-[9px] sm:text-[11px] uppercase tracking-[0.28em] font-medium">
                    Since 1980 • Premium Jewellery
                  </span>
                </div>

                <h1 className="text-white text-[32px] sm:text-[48px] md:text-[60px] lg:text-[74px] leading-[0.95] tracking-[-0.05em] font-semibold max-w-3xl">
                  {slides[current].title}
                </h1>

                <p className="mt-4 sm:mt-6 text-white/75 text-[13px] sm:text-[15px] lg:text-[17px] leading-6 sm:leading-7 max-w-xl font-normal">
                  {slides[current].subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-8 sm:mt-10">
                  <Link
                    to="/product"
                    className="group h-11 sm:h-13 px-5 sm:px-8 bg-[#C6A769] text-black text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-white"
                  >
                    Explore Collection

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="h-11 sm:h-13 px-5 sm:px-8 border border-white/25 text-white text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium inline-flex items-center transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${current === index
                  ? "w-8 h-[5px] bg-[#C6A769]"
                  : "w-2.5 h-2.5 bg-white/40"
                  }`}
              />
            ))}
          </div>

          <div className="absolute inset-y-0 left-3 sm:left-6 flex items-center">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#C6A769] hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-3 sm:right-6 flex items-center">
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#C6A769] hover:text-black transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-black/10">
          {[
            "Certified Gold Jewellery",
            "Exclusive Bridal Collections",
            "Trusted By 12K+ Customers",
            "Premium Handcrafted Designs",
          ].map((item) => (
            <div
              key={item}
              className="h-16 sm:h-20 border-r border-black/10 flex items-center justify-center px-4 sm:px-6"
            >
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.22em] text-black/60 font-medium text-center leading-5">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}