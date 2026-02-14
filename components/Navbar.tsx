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
            setIsScrolled(window.scrollY > 100);
            if (window.scrollY <= 100) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = ["Home", "Services", "Projects", "Contact Us"];

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
                        <div className="flex items-center gap-2">
                            <div className="relative w-48 h-12">
                                <Image src="/full logo header.png" alt="Akzorium Logo" width={192} height={48} className="object-contain" />
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
                            {menuItems.map(item => (
                                <Link key={item} href="#" className="hover:text-white transition-colors">{item}</Link>
                            ))}
                        </div>

                        <button className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white/10 transition-colors">
                            Enquire Now
                        </button>
                    </motion.nav>
                ) : (
                    // Scrolled Dynamic Island Navbar
                    <motion.div
                        layoutId="navbar-capsule"
                        className="pointer-events-auto bg-black/40 border border-white/10 backdrop-blur-3xl shadow-2xl shadow-black/50 rounded-full flex items-center overflow-hidden relative"
                        style={{ height: "56px" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        {/* Content Container */}
                        <div className="flex items-center px-1">

                            {/* Enquire Button - Animate width/opacity cleanly */}
                            <AnimatePresence mode="popLayout" initial={false}>
                                {!isMenuOpen && (
                                    <motion.button
                                        initial={{ opacity: 0, width: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, width: "auto", scale: 1 }}
                                        exit={{ opacity: 0, width: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 text-sm font-bold tracking-wide hover:text-gray-300 whitespace-nowrap overflow-hidden"
                                    >
                                        Enquire Us
                                    </motion.button>
                                )}
                            </AnimatePresence>

                            {/* Divider / Logo Area */}
                            <div
                                className="w-10 h-10 relative shrink-0 mx-1 cursor-pointer flex items-center justify-center"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <Image src="/metalic logo.png" alt="Logo" width={32} height={32} className="object-contain" />
                            </div>

                            {/* Menu Items - Animate width/opacity cleanly */}
                            <AnimatePresence mode="popLayout">
                                {isMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
                                        exit={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
                                        className="flex items-center gap-1 overflow-hidden"
                                    >
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item}
                                                href="#"
                                                className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white whitespace-nowrap transition-colors rounded-full hover:bg-white/10"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Toggle Button - Fixed size, always present */}
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
