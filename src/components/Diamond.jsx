import { diamondCs } from "../data/jewels";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

export default function Diamonds() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section
      id="diamonds"
      className="bg-black text-white py-20 sm:py-28 overflow-hidden border-b border-white/5"
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C6A769]" />

              <span className="text-[11px] uppercase tracking-[0.32em] text-white/60 font-medium">
                The 4Cs Of Diamonds
              </span>
            </div>

            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.06em] font-semibold">
              Understanding
              <br />
              Diamond Quality
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-8 text-white/55 max-w-md">
            The globally recognised 4Cs define the beauty, brilliance, and
            value of every diamond — making it a timeless symbol of luxury and
            investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-4">
            {diamondCs.map((item, i) => (
              <button
                key={item.word}
                onClick={() => setActive(i)}
                className={`group w-full text-left border transition-all duration-300 p-6 sm:p-8 ${
                  active === i
                    ? "border-[#C6A769] bg-white/[0.03]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-start gap-5">
                  <span
                    className={`text-[46px] sm:text-[56px] leading-none tracking-[-0.05em] font-semibold transition-all duration-300 ${
                      active === i
                        ? "text-[#C6A769]"
                        : "text-white/15 group-hover:text-white/40"
                    }`}
                  >
                    {item.letter}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-5">
                      <h3
                        className={`text-[24px] sm:text-[28px] tracking-[-0.04em] font-semibold transition-all duration-300 ${
                          active === i
                            ? "text-white"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {item.word}
                      </h3>

                      {active === i && (
                        <div className="w-10 h-px bg-[#C6A769]" />
                      )}
                    </div>

                    <p
                      className={`overflow-hidden transition-all duration-500 text-[14px] sm:text-[15px] leading-7 ${
                        active === i
                          ? "max-h-40 opacity-100 mt-4 text-white/60"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/10" />

              <div className="absolute inset-10 rounded-full border border-white/5" />

              <div className="absolute inset-20 rounded-full border border-[#C6A769]/20" />

              <div className="w-[220px] h-[220px] rounded-full border border-[#C6A769]/30 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center text-center p-10">
                <span className="text-[82px] leading-none text-[#C6A769]">
                  ◇
                </span>

                <h3 className="mt-4 text-[34px] tracking-[-0.04em] font-semibold">
                  {diamondCs[active].word}
                </h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/45 font-medium">
                  The {diamondCs[active].letter} Factor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}