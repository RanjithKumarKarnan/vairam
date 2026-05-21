import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const textRefs = useRef([]);
    const ctaBtnRef = useRef(null);

    // Deep, dark luxury placeholder (e.g., dark macro diamond/gold texture)
    const bgImage = "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=3540&auto=format&fit=crop";

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Cinematic Background Parallax & Zoom
            // The background scales down and pans as you scroll into the section
            gsap.fromTo(bgRef.current,
                { scale: 1.3, y: "-15%" },
                {
                    scale: 1,
                    y: "0%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // 2. Framer-Motion Style Fluid Text Reveal
            gsap.fromTo(textRefs.current,
                { y: 100, opacity: 0, rotateX: -20 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.8,
                    stagger: 0.15,
                    ease: "expo.out", // Gives that Framer Motion "snap and settle" fluidity
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // 3. Button Fade & Scale Up
            gsap.fromTo(ctaBtnRef.current,
                { y: 40, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[70vh] md:min-h-[90vh] bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center py-24 md:py-32"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <img
                    ref={bgRef}
                    src={bgImage}
                    alt="Luxury Texture"
                    className="w-full h-full object-cover opacity-30" // Low opacity for text readability
                />
                {/* Vignette Gradients for that deep, moody studio look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

                {/* Subtitle */}
                <div className="overflow-hidden mb-6" style={{ perspective: '1000px' }}>
                    <span
                        ref={addToTextRefs}
                        className="block text-white/50 uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold origin-bottom"
                    >
                        Bespoke Service
                    </span>
                </div>

                {/* Massive Typography */}
                <div className="flex flex-col font-serif leading-[1.05] tracking-tight mb-8 md:mb-12" style={{ perspective: '1000px' }}>
                    <div className="overflow-hidden py-1">
                        <h2
                            ref={addToTextRefs}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] italic font-light origin-bottom"
                        >
                            Create Your
                        </h2>
                    </div>
                    <div className="overflow-hidden py-1">
                        <h2
                            ref={addToTextRefs}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] text-white origin-bottom"
                        >
                            Legacy.
                        </h2>
                    </div>
                </div>

                {/* Description */}
                <div className="overflow-hidden max-w-xl mx-auto mb-12 md:mb-16">
                    <p
                        ref={addToTextRefs}
                        className="text-white/70 font-light tracking-wide text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                        We translate your vision into custom-made reality. Share your inspirations, and let our master craftsmen forge bespoke ornaments to be treasured for generations.
                    </p>
                </div>

                {/* Ultimate Premium Call to Action Button */}
                <div ref={ctaBtnRef} className="pt-4">
                    <a href="#contact" className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden border border-white/30 bg-transparent uppercase tracking-[0.3em] text-xs font-medium text-white transition-all duration-700 hover:border-white hover:scale-105 active:scale-95">

                        {/* Magnetic/Sweep Fill Effect */}
                        <span className="absolute inset-0 translate-y-full rounded-t-full bg-white transition-transform duration-700 ease-in-out group-hover:translate-y-0 group-hover:rounded-none"></span>

                        {/* Text that flips color using mix-blend-mode */}
                        <span className="relative z-10 mix-blend-difference">
                            Book a Consultation
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CallToAction;