import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const lastScrollY = useRef(0);

    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const mobileMenuRef = useRef(null);
    const mobileLinksRef = useRef([]);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Jewels', href: '#jewels' },
        { name: 'Craftsmanship', href: '#craftsmanship' },
        { name: 'Why Vairam', href: '#why-vairam' }
    ];

    const addToLinksRef = (el) => {
        if (el && !linksRef.current.includes(el)) linksRef.current.push(el);
    };

    const addToMobileLinksRef = (el) => {
        if (el && !mobileLinksRef.current.includes(el)) mobileLinksRef.current.push(el);
    };

    // Scroll Detection for Hide/Show and Background Style
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Toggle frosted glass background when scrolling past 50px
            setIsScrolled(currentScrollY > 50);

            // Ignore negative scroll values (iOS bounce effect at the top of the page)
            if (currentScrollY < 0) return;

            // 2. Hide/Show logic based on scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isOpen) {
                // Scrolling DOWN (past 100px and menu is closed) -> Hide Navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current && !isOpen) {
                // Scrolling UP (and menu is closed) -> Show Navbar
                setIsVisible(true);
            }

            // Update the last scroll position
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // Initial Entrance Animation
    useEffect(() => {
        const tl = gsap.timeline();

        // FIXED: Removed the `y` transform from navRef so GSAP doesn't lock the CSS translate classes.
        tl.fromTo(navRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power4.out' }
        )
            .fromTo(logoRef.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
                "-=0.6"
            )
            .fromTo(linksRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
                "-=0.4"
            );
    }, []);

    // Mobile Menu Toggle Animation
    useEffect(() => {
        if (isOpen) {
            gsap.to(mobileMenuRef.current, {
                height: '100vh',
                opacity: 1,
                duration: 0.6,
                ease: 'power3.inOut',
                display: 'flex'
            });
            gsap.fromTo(mobileLinksRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
            );
        } else {
            gsap.to(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.inOut',
                onComplete: () => {
                    gsap.set(mobileMenuRef.current, { display: 'none' });
                }
            });
        }
    }, [isOpen]);

    return (
        <header
            ref={navRef}
            // The isVisible state now effortlessly drives the translate-y utility classes
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md border-gray-200 py-0'
                    : 'bg-transparent border-transparent py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-24">

                {/* Logo Section */}
                <div ref={logoRef} className="flex items-center cursor-pointer">
                    <img
                        src={logo}
                        alt="Vairam Logo"
                        className={`h-12 w-auto object-contain transition-all duration-500 rounded-xl ${!isScrolled ? 'invert' : ''
                            }`}
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            ref={addToLinksRef}
                            href={item.href}
                            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group ${isScrolled ? 'text-gray-900 hover:text-gray-500' : 'text-white hover:text-gray-300'
                                }`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-gray-900' : 'bg-white'
                                }`}></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50 relative w-8 h-8 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`block w-6 h-[2px] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled || isOpen ? 'bg-gray-900' : 'bg-white'}`}></span>
                    <span className={`block w-6 h-[2px] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                    <span className={`block w-6 h-[2px] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || isOpen ? 'bg-gray-900' : 'bg-white'}`}></span>
                </button>
            </div>

            {/* Mobile Full-Screen Menu */}
            <div
                ref={mobileMenuRef}
                className="fixed top-0 left-0 w-full h-0 bg-white/95 backdrop-blur-xl flex-col justify-center items-center hidden overflow-hidden z-40"
            >
                <nav className="flex flex-col gap-8 text-center">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            ref={addToMobileLinksRef}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-900 text-2xl uppercase tracking-widest hover:text-gray-500 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;