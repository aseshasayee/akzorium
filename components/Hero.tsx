"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "./TextReveal";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 py-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/main bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">

                {/* Left Text - Reduced Size & Delayed Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="text-center md:text-left order-2 md:order-1"
                >
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none space-y-1 uppercase font-grand">
                        <span className="block">Akzorium</span>
                        <span className="block text-gray-500">Media</span>
                        <span className="block">And</span>
                        <span className="block text-gray-500">Technology</span>
                    </h1>
                </motion.div>

                {/* Center Object - Combined Logo - First to Appear */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative flex justify-center order-1 md:order-2 py-8 md:py-0"
                >
                    <div className="relative w-[70vw] h-[70vw] md:w-[32rem] md:h-[32rem] z-10">
                        <Image
                            src="/logo with reflection.png"
                            alt="Akzorium Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Text - Coordinated Reveal after Logo & Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center md:text-right order-3"
                >
                    <div className="text-2xl md:text-4xl font-bold tracking-widest space-y-2 uppercase flex flex-col items-center md:items-end font-grand">
                        {/* Faster sequence */}
                        <TextReveal text="Premium" delay={0.9} />
                        <TextReveal text="Trustworthy" className="text-gray-500" delay={1.0} />
                        <TextReveal text="Intelligent" delay={1.1} />
                        <TextReveal text="Scalable" className="text-gray-500" delay={1.2} />
                    </div>
                </motion.div>
            </div>

            {/* Smooth Transition Fade - Extended and Pushed Down */}
            <div className="absolute -bottom-1 left-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

        </section >
    );
}
