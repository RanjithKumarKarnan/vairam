import { Link } from "react-router-dom";
import { Phone, Diamond, ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
    {
        num: "01",
        title: "Choose Amount",
        text: "Select your comfortable monthly savings amount.",
    },
    {
        num: "02",
        title: "Save Regularly",
        text: "Pay for 11 months continuously without interruption.",
    },
    {
        num: "03",
        title: "Earn Benefits",
        text: "Enjoy exclusive, special benefits from Vairam on maturity.",
    },
    {
        num: "04",
        title: "Redeem Luxury",
        text: "Redeem your savings against exquisite diamond collections.",
    },
];

export default function SavingsScheme() {
    const { ref: headerRef, inView: headerInView } = useInView();
    const { ref: stepsRef, inView: stepsInView } = useInView();
    const { ref: detailsRef, inView: detailsInView } = useInView();

    return (
        <section className="bg-white py-20 sm:py-28 border-b border-black/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* ── Header Section ── */}
                <div
                    ref={headerRef}
                    className={`max-w-3xl transition-all duration-1000 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-[#C6A769]" />
                        <span className="text-[11px] uppercase tracking-[0.32em] text-black/55 font-medium">
                            Smart Investment
                        </span>
                    </div>

                    <h2 className="text-[38px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-[-0.06em] font-semibold text-black">
                        Vairam Diamond
                        <br />
                        Savings Scheme
                    </h2>

                    <p className="mt-6 flex items-center gap-3 text-[14px] sm:text-[16px] uppercase tracking-[0.2em] text-[#C6A769] font-medium">
                        <Diamond size={16} className="fill-[#C6A769]" />
                        Save Today. Shine Forever.
                        <Diamond size={16} className="fill-[#C6A769]" />
                    </p>

                    <p className="mt-8 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-black/65">
                        Introducing a smart and elegant way to own timeless diamond jewellery with easy monthly savings. Whether it’s a diamond ring, elegant earrings, minimal pendants, daily wear collections, or a luxurious necklace — your dream jewellery is now within reach.
                    </p>
                </div>

                {/* ── How It Works (Steps Grid) ── */}
                <div
                    ref={stepsRef}
                    className="mt-20 sm:mt-24"
                >
                    <div className="flex items-center gap-3 mb-10">
                        <span className="text-[11px] uppercase tracking-[0.32em] text-black font-semibold">
                            How It Works
                        </span>
                        <div className="flex-1 h-px bg-black/5" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.num}
                                className={`group border border-black/10 bg-[#fafafa] p-8 transition-all duration-700 hover:border-[#C6A769] hover:bg-white ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <span className="text-[32px] font-light text-[#C6A769]/40 group-hover:text-[#C6A769] transition-colors duration-300">
                                    {step.num}
                                </span>
                                <h4 className="text-[18px] tracking-[-0.03em] font-semibold text-black mt-6 mb-3">
                                    {step.title}
                                </h4>
                                <p className="text-[14px] leading-6 text-black/60">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Contact CTA Card ── */}
                <div
                    ref={detailsRef}
                    className={`mt-20 sm:mt-24 transition-all duration-1000 ${detailsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-black text-white p-8 sm:p-12 lg:p-16 border border-[#C6A769]/20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C6A769] font-medium mb-4">
                                Start Saving Today
                            </p>
                            <h4 className="text-[28px] sm:text-[36px] leading-[1.1] tracking-[-0.03em] font-semibold">
                                Every piece is crafted with elegance, precision, and trust.
                            </h4>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center shrink-0">
                            <a
                                href="tel:9789564111"
                                className="flex items-center gap-3 bg-[#C6A769] text-black px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300"
                            >
                                <Phone size={16} />
                                97895 64111
                            </a>

                            <Link
                                to="/contact"
                                className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors duration-300"
                            >
                                Enquire Now
                                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}