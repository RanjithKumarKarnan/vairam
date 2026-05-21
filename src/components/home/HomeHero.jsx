import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/effect-fade';

const HomeHero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const titleRefs = useRef([]);
    const subtitleRefs = useRef([]);
    const ctaRefs = useRef([]);

    const slides = [
        {
            id: 1,
            title: "Prosperity & Purity",
            subtitle: "Our jewels resonate prosperity, purity, and perfection. Crafted with opulence to enhance rich tradition.",
            image: "https://images.unsplash.com/photo-1599643478524-fb66f70a0066?q=80&w=3540&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Crafted With Opulence",
            subtitle: "Traditional jewels with the touch of contemporary designs. A complete standout for generations together.",
            image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=3540&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Bespoke Elegance",
            subtitle: "We create complicated designs, custom-made jewellery, and bespoke ornaments tailored to your vision.",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=3540&auto=format&fit=crop"
        }
    ];

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);

        gsap.set([titleRefs.current, subtitleRefs.current, ctaRefs.current], {
            y: 100,
            opacity: 0
        });

        gsap.to([titleRefs.current[swiper.realIndex], subtitleRefs.current[swiper.realIndex], ctaRefs.current[swiper.realIndex]], {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.2
        });
    };

    return (
        <section className="relative w-full h-screen bg-black overflow-hidden group">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                onSlideChangeTransitionStart={handleSlideChange}
                onSwiper={handleSlideChange}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        {({ isActive }) => (
                            <>
                                <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
                                            }`}
                                    />

                                    {/* Top gradient specifically added to protect the transparent Navbar text */}
                                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

                                    {/* Existing Gradients for main text */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
                                </div>

                                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-20 sm:pb-24 md:pb-32">
                                    <div className="max-w-4xl flex flex-col gap-4 sm:gap-6">

                                        <div className="overflow-hidden py-2">
                                            <h2
                                                ref={el => titleRefs.current[index] = el}
                                                className="italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-wide leading-tight"
                                            >
                                                {slide.title}
                                            </h2>
                                        </div>

                                        <div className="overflow-hidden">
                                            <p
                                                ref={el => subtitleRefs.current[index] = el}
                                                className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-widest max-w-2xl leading-relaxed border-l-2 border-white/30 pl-4 sm:pl-6"
                                            >
                                                {slide.subtitle}
                                            </p>
                                        </div>

                                        <div className="overflow-hidden mt-2 sm:mt-4">
                                            <div ref={el => ctaRefs.current[index] = el}>
                                                <button className="relative overflow-hidden group/btn px-6 py-3 sm:px-10 sm:py-4 bg-transparent border border-white text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold hover:text-black transition-colors duration-500">
                                                    <span className="relative z-10">Discover Collection</span>
                                                    <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )}
                    </SwiperSlide>
                ))}

                <div className="absolute z-20 bottom-8 sm:bottom-12 right-4 sm:right-6 lg:right-12 flex items-center gap-4 sm:gap-8">
                    <div className="text-white font-serif tracking-widest text-sm sm:text-lg flex items-center gap-2 sm:gap-4">
                        <span className="overflow-hidden">
                            <span className="block animate-slideUp">
                                0{activeSlide + 1}
                            </span>
                        </span>
                        <span className="w-8 sm:w-12 h-[1px] bg-white/50"></span>
                        <span className="text-white/50">0{slides.length}</span>
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default HomeHero;