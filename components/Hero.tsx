"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();

    // Genie Effect Transforms for Content
    const contentScale = useTransform(scrollY, [0, 500], [1, 0.4]);
    const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const contentFilter = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(10px)"]);
    const contentY = useTransform(scrollY, [0, 500], [0, 400]);

    // Pill Box Transformation (Corrected "Genie" Effect)
    // 1. Shrink WIDTH to become a DOT (Slower transition for visibility)
    const pillWidth = useTransform(scrollY, [0, 200], ["100%", "60px"]); // Larger dot (60px)
    const pillHeight = useTransform(scrollY, [0, 200, 450], ["50px", "60px", "140px"]); // Becomes circle, then stretches moderately
    const pillRadius = useTransform(scrollY, [0, 200], ["9999px", "50%"]);

    // Style changes during shrink
    const pillBorder = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0.1)", "rgba(255,255,255,1)"]);
    const pillShadow = useTransform(scrollY, [0, 200], ["0px 0px 0px rgba(192,192,192,0)", "0px 0px 50px rgba(255,255,255,1)"]); // Very strong glow
    const pillBg = useTransform(scrollY, [0, 200], ["rgba(0,0,0,0.6)", "rgba(255,255,255,1)"]);
    const textOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    // 2. Drop: Scroll 150+ (After becoming a dot)
    const pillY = useTransform(scrollY, [0, 200, 450], [0, 0, 250]);
    const pillOpacity = useTransform(scrollY, [0, 350, 450], [1, 1, 0]); // Fades out smoothly at the end
    // Background Opacity for Fade Out - Fades out completely by 400px
    const bgOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    const [showBg, setShowBg] = useState(true);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if (latest > 450 && showBg) {
                setShowBg(false);
            } else if (latest <= 450 && !showBg) {
                setShowBg(true);
            }
        });
    }, [scrollY, showBg]);

    return (
        <section className="relative z-20 min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 pt-20 pb-32">
            {/* Background */}
            {showBg && (
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ opacity: bgOpacity }}
                >
                    <Image
                        src="/main bg.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-60"
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            )}

            {/* Fog Overlay (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

            {/* Content Container - Applying Genie Effect */}
            <motion.div
                style={{
                    scale: contentScale,
                    opacity: contentOpacity,
                    filter: contentFilter,
                    y: contentY
                }}
                className="relative z-20 w-full max-w-7xl flex flex-col items-center text-center space-y-12 mt-16 origin-bottom"
            >

                {/* Main Tagline - Updated */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] uppercase font-grand max-w-6xl mx-auto"
                >
                    Get More Customers, <br />
                    Increase Sales, and <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        Grow Revenue.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto"
                >
                    {/* Digital Marketing, Website Development, AI Automation, and Growth Funnels. */}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center mt-8"
                >
                    <a href="#services" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wide rounded-full hover:bg-gray-200 transition-colors">
                        View Services
                    </a>
                    <a href="/contact" className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm font-bold uppercase tracking-wide rounded-full hover:bg-white hover:text-black transition-all">
                        Contact Us
                    </a>
                </motion.div>
            </motion.div>

            {/* Sublines / Description - Moved OUTSIDE container to be absolute bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-12 left-0 w-full flex flex-col items-center justify-center px-4 z-30 pointer-events-none"
            >
                {/* TRANSFORMING PILL BOX */}
                <motion.div
                    className="relative flex items-center justify-center border pointer-events-auto"
                    style={{
                        width: pillWidth,
                        height: pillHeight,
                        borderRadius: pillRadius,
                        y: pillY,
                        opacity: pillOpacity,
                        borderColor: pillBorder,
                        boxShadow: pillShadow,
                        backgroundColor: pillBg
                    }}
                >
                    <motion.p
                        style={{ opacity: textOpacity }}
                        className="text-sm md:text-base text-gray-300 font-bold tracking-[0.2em] uppercase whitespace-nowrap px-6"
                    >
                        Marketing <span className="text-blue-500 mx-2">•</span> Technology <span className="text-blue-500 mx-2">•</span> Strategy
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
