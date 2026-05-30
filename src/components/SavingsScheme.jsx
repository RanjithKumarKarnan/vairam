import { Link } from "react-router-dom";
import { Phone, Diamond, ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

// Custom SVG Icon for WhatsApp
const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const steps = [
    {
        num: "01",
        title: "Scan the App",
        qrCode: "/qr.svg",
    },
    {
        num: "02",
        title: "Choose Amount",
        text: "Select your comfortable monthly savings amount.",
    },
    {
        num: "03",
        title: "Save Regularly",
        text: "Pay for 12 months continuously without interruption.",
    },
    {
        num: "04",
        title: "Earn Benefits",
        text: "Enjoy exclusive, special benefits from Vairam on maturity.",
        highlight: "Benefit: No MC & No Wastage",
    },
    {
        num: "05",
        title: "Redeem Luxury",
        text: "Redeem your savings against exquisite diamond collections, After 365 days.",
    },
];

export default function SavingsScheme() {
    const { ref: headerRef, inView: headerInView } = useInView();
    const { ref: stepsRef, inView: stepsInView } = useInView();
    const { ref: detailsRef, inView: detailsInView } = useInView();

    // Pre-filled WhatsApp message
    const whatsappMessage = "Hello Vairam Jewellery! I would like to know more about the Savings Scheme.";
    const whatsappURL = `https://wa.me/919789564111?text=${encodeURIComponent(whatsappMessage)}`;

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
                        Vairam <span className="italic font-serif text-[#C6A769]">Diamond & Gold </span>
                        Savings Scheme
                    </h2>

                    <p className="mt-6 flex items-center gap-3 text-[14px] sm:text-[16px] uppercase tracking-[0.2em] text-[#C6A769] font-medium">
                        <Diamond size={16} className="fill-[#C6A769]" />
                        Save Today. Shine Forever.
                        <Diamond size={16} className="fill-[#C6A769]" />
                    </p>

                    <p className="mt-8 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-black/65">
                        Introducing a smart and elegant way to own timeless diamond jewellery with easy monthly savings. Whether it’s a diamond ring, elegant earrings, minimal pendants, daily wear collections, or a luxurious necklace, Gold coins and Gold jewellery - your dream jewellery is now within reach.
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.num}
                                className={`group relative border border-black/10 bg-[#fafafa] p-8 transition-all duration-700 hover:border-[#C6A769] hover:bg-white ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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

                                {/* Render QR Code if it exists in the step data */}
                                {step.qrCode && (
                                    <div className="border border-black/10 p-2 bg-white inline-block">
                                        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 flex items-center justify-center relative">
                                            {/* Fallback styling for the image in case it's missing initially */}
                                            <span className="absolute text-[10px] text-black/40 text-center px-2">QR Placeholder</span>
                                            <img
                                                src={step.qrCode}
                                                alt="Scan QR to Download"
                                                className="relative z-10 w-full h-full object-cover mix-blend-multiply"
                                                onError={(e) => {
                                                    // Hides the broken image icon if dummy file doesn't exist yet
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Highlight Badge specifically for the 12-month completion */}
                                {step.highlight && (
                                    <div className="mt-6 inline-flex items-center gap-2 bg-[#C6A769]/10 border border-[#C6A769]/30 px-3 py-2 rounded-sm">
                                        <Sparkles size={14} className="text-[#C6A769]" />
                                        <span className="text-[#C6A769] text-[10px] uppercase tracking-[0.1em] font-bold">
                                            {step.highlight}
                                        </span>
                                    </div>
                                )}
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

                            {/* Phone & WhatsApp Group */}
                            <div className="flex items-stretch gap-2">
                                <a
                                    href="tel:9789564111"
                                    className="flex items-center gap-3 bg-[#C6A769] text-black px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300"
                                >
                                    <Phone size={16} />
                                    <span className="hidden sm:inline">97895 64111</span>
                                    <span className="sm:hidden">Call Us</span>
                                </a>

                                <a
                                    href={whatsappURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-[#25D366] text-white px-5 py-4 hover:brightness-110 transition-all duration-300"
                                    aria-label="WhatsApp Us"
                                >
                                    <WhatsAppIcon size={18} />
                                </a>
                            </div>

                            <Link
                                to="/contact"
                                className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors duration-300 sm:ml-4 mt-2 sm:mt-0"
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