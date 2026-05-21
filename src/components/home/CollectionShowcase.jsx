import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CollectionShowcase = () => {
    const sectionRef = useRef(null);
    const headerRefs = useRef([]);
    const cardsRef = useRef([]);

    const products = [
        {
            id: 1,
            title: "The Royal Antique Necklace",
            category: "Heritage Collection",
            image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Diamond Studded Choker",
            category: "Bridal Elegance",
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Emerald Drop Earrings",
            category: "Contemporary Touch",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Ruby & Gold Bangle",
            category: "Heritage Collection",
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 5,
            title: "Platinum Solitaire Ring",
            category: "Modernity",
            image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 6,
            title: "Temple Motif Pendant",
            category: "Bespoke Ornaments",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Reveal Animation
            gsap.fromTo(headerRefs.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Individual Card Reveal Animation
            cardsRef.current.forEach((card) => {
                gsap.fromTo(card,
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToHeaderRefs = (el) => {
        if (el && !headerRefs.current.includes(el)) headerRefs.current.push(el);
    };

    const addToCardsRef = (el) => {
        if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
    };

    return (
        <section ref={sectionRef} className="relative w-full bg-white text-gray-900 py-24 md:py-32 overflow-hidden">

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 md:mb-24 flex flex-col items-center text-center">
                <div className="overflow-hidden pb-2">
                    <h2
                        ref={addToHeaderRefs}
                        className="italic text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-black"
                    >
                        Masterpieces
                    </h2>
                </div>
                <div className="overflow-hidden mt-4">
                    <p
                        ref={addToHeaderRefs}
                        className="text-sm md:text-base font-light tracking-widest text-gray-500 max-w-2xl leading-relaxed uppercase"
                    >
                        Traditional jewels with the touch of contemporary design
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                    {products.map((item, index) => (
                        <div
                            key={item.id}
                            ref={addToCardsRef}
                            className="group cursor-pointer flex flex-col"
                        >
                            {/* Card Image Container 
                                CHANGED: aspect-[3/4] is now aspect-square (1:1) on mobile and aspect-[4/5] on desktop 
                                to reduce the overall height of the cards. 
                            */}
                            <div className="overflow-hidden relative w-full aspect-square md:aspect-[5/5] mb-6 bg-gray-50">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>

                            {/* Card Text Content */}
                            <div className="flex flex-col items-center text-center px-4">
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-gray-400 mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-serif italic text-black group-hover:text-gray-600 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Animated "View Details" line */}
                                <div className="mt-4 flex items-center justify-center gap-2 overflow-hidden h-6">
                                    <span className="text-xs uppercase tracking-widest text-black translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                        Discover
                                    </span>
                                    <div className="w-8 h-[1px] bg-black translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View All" Button 
                    CHANGED: Implemented the Hero-style "fill" animation hover effect 
                */}
                <div className="mt-16 md:mt-20 flex justify-center">
                    <button className="relative overflow-hidden group/btn px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-black text-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold hover:text-white transition-colors duration-500">
                        <span className="relative z-10">View Complete Collection</span>
                        {/* The sliding background fill */}
                        <div className="absolute inset-0 bg-black translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default CollectionShowcase;