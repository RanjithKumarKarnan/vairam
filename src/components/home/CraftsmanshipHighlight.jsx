import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CraftsmanshipHighlight = () => {
    const sectionRef = useRef(null);
    const titleRefs = useRef([]);
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);
    const textContentRefs = useRef([]);
    const lineRef = useRef(null);

    // High-resolution craftsmanship placeholder
    const bgImage = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=3540&auto=format&fit=crop";

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Massive Typography Reveal
            gsap.fromTo(titleRefs.current,
                { y: "120%", skewY: 5, opacity: 0 },
                {
                    y: "0%",
                    skewY: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // 2. Cinematic Image Expansion (Expands horizontally from the center)
            gsap.fromTo(imageContainerRef.current,
                { clipPath: "inset(0% 20% 0% 20%)", scale: 0.9 },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    scale: 1,
                    duration: 2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // 3. Subtle Internal Image Parallax
            gsap.fromTo(imageRef.current,
                { y: "-10%", scale: 1.1 },
                {
                    y: "10%",
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // 4. Content Grid & Divider Line Reveal
            const tlContent = gsap.timeline({
                scrollTrigger: {
                    trigger: textContentRefs.current[0],
                    start: "top 85%",
                }
            });

            tlContent.fromTo(lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 1.5, ease: "power4.inOut", transformOrigin: "left center" }
            )
                .fromTo(textContentRefs.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
                    "-=1"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToTitles = (el) => {
        if (el && !titleRefs.current.includes(el)) titleRefs.current.push(el);
    };

    const addToTextContent = (el) => {
        if (el && !textContentRefs.current.includes(el)) textContentRefs.current.push(el);
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen bg-white text-black overflow-hidden py-24 sm:py-32 lg:py-48"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col">

                {/* 1. THE HEADER: Massive, Fluid Typography */}
                <div className="flex flex-col mb-16 md:mb-24 w-full">
                    <span className="uppercase tracking-[0.4em] text-gray-400 text-xs sm:text-sm font-semibold mb-8 sm:mb-12 ml-1">
                        The Art of Making
                    </span>

                    {/* Using 'vw' (viewport width) ensures the text scales flawlessly on all screen sizes */}
                    <div className="flex flex-col font-serif uppercase tracking-tight leading-[0.85] w-full">
                        <div className="overflow-hidden pb-4">
                            <h2 ref={addToTitles} className="text-[15vw] md:text-[10vw] lg:text-[9vw] text-black drop-shadow-sm">
                                Beyond
                            </h2>
                        </div>
                        <div className="overflow-hidden pb-4 flex justify-end">
                            <h2 ref={addToTitles} className="text-[15vw] md:text-[10vw] lg:text-[9vw] text-black drop-shadow-sm italic capitalize">
                                Imagination.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 2. THE CANVAS: Cinematic Image Window */}
                <div
                    ref={imageContainerRef}
                    className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] relative overflow-hidden bg-gray-100 mb-16 md:mb-24"
                >
                    <img
                        ref={imageRef}
                        src={bgImage}
                        alt="Jewelry Craftsmanship"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* 3. THE EDITORIAL GRID: Asymmetrical Text Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 w-full relative">

                    {/* Top border line spanning the grid */}
                    <div
                        ref={lineRef}
                        className="absolute top-0 left-0 w-full h-[1px] bg-gray-300 hidden md:block"
                    ></div>

                    {/* Left Column: Call To Action */}
                    <div className="md:col-span-4 flex items-start md:pt-12">
                        <div ref={addToTextContent} className="overflow-hidden">
                            <button className="relative overflow-hidden group/btn px-8 py-4 bg-transparent border border-black text-black uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold transition-colors duration-500">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500 delay-75">
                                    Start Your Custom Design
                                </span>
                                <div className="absolute inset-0 bg-black translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Paragraphs */}
                    <div className="md:col-start-7 md:col-span-6 flex flex-col gap-8 md:pt-12">
                        <div className="overflow-hidden">
                            <p ref={addToTextContent} className="text-gray-800 font-light tracking-wide text-xl sm:text-2xl lg:text-3xl leading-snug">
                                We create any complicated designs, which are challenging for most craftsmen.
                            </p>
                        </div>

                        <div className="overflow-hidden">
                            <p ref={addToTextContent} className="text-gray-500 font-light tracking-wide text-sm sm:text-base leading-relaxed max-w-lg">
                                We turn your own designs into custom-made jewellery, and create bespoke ornaments tailored specifically to your vision and pictures. Our touch of contemporary design is a complete standout for generations to come.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CraftsmanshipHighlight;