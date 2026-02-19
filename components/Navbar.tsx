"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Trigger dynamic island when scrolling past Hero (approx 1 view height)
            const threshold = window.innerHeight - 150;
            setIsScrolled(window.scrollY > threshold);
            if (window.scrollY <= threshold) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "About", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-[60] flex justify-center pointer-events-none">
            <AnimatePresence mode="wait">
                {!isScrolled ? (
                    // Default Full Navbar
                    <motion.nav
                        key="full-navbar"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full max-w-7xl flex items-center justify-between px-6 pointer-events-auto"
                    >
                        <Link href="/" className="relative w-48 h-12 block">
                            <Image src="/full logo header.png" alt="Akzorium Logo" width={192} height={48} className="object-contain" />
                        </Link>

                        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
                            {menuItems.map(item => (
                                <Link key={item.name} href={item.href} className="hover:text-white transition-colors">{item.name}</Link>
                            ))}
                        </div>

                        <Link href="/contact">
                            <button className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-bold uppercase hover:bg-white hover:text-black transition-all duration-300">
                                Get a Quote
                            </button>
                        </Link>
                    </motion.nav>
                ) : (
                    // Scrolled Dynamic Island Navbar
                    <motion.div
                        layoutId="navbar-capsule"
                        className="pointer-events-auto bg-black/40 border border-white/10 backdrop-blur-3xl shadow-2xl shadow-black/50 rounded-full flex items-center overflow-hidden relative"
                        style={{ height: "56px" }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1.2 }}
                    >
                        {/* Content Container */}
                        <div className="flex items-center px-1">
                            {/* Enquire Button */}
                            <AnimatePresence mode="popLayout" initial={false}>
                                {!isMenuOpen && (
                                    <Link href="/contact">
                                        <motion.button
                                            initial={{ opacity: 0, width: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, width: "auto", scale: 1 }}
                                            exit={{ opacity: 0, width: 0, scale: 0.8 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="px-4 text-xs font-bold tracking-wide hover:text-gray-300 whitespace-nowrap overflow-hidden uppercase"
                                        >
                                            Get a Quote
                                        </motion.button>
                                    </Link>
                                )}
                            </AnimatePresence>

                            {/* Divider / Logo Area */}
                            <Link href="/">
                                <div
                                    className="w-10 h-10 relative shrink-0 mx-1 cursor-pointer flex items-center justify-center"
                                >
                                    <Image src="/metalic logo.png" alt="Logo" width={32} height={32} className="object-contain" />
                                </div>
                            </Link>

                            {/* Menu Items */}
                            <AnimatePresence mode="popLayout">
                                {isMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(10px)" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="flex items-center gap-1 overflow-hidden"
                                    >
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white whitespace-nowrap transition-colors rounded-full hover:bg-white/10"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Toggle Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="h-10 px-3 flex items-center justify-center rounded-full hover:bg-white/10 shrink-0 transition-colors gap-2"
                            >
                                <span className="text-sm font-bold tracking-wider hidden md:block">
                                    {isMenuOpen ? "CLOSE" : "Menu"}
                                </span>
                                <motion.div
                                    key={isMenuOpen ? "close" : "open"}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                                </motion.div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
