"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import debounce from "lodash/debounce";

export default function ScrollVideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    // Fade in effect for the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Function to play video
        const playVideo = () => {
            if (video.paused) {
                video.play().catch(e => console.log("Video play error:", e));
            }
            setIsScrolling(true);
        };

        // Function to pause video (debounced)
        const pauseVideo = debounce(() => {
            if (!video.paused) {
                video.pause();
            }
            setIsScrolling(false);
        }, 150); // Adjust delay as needed (150ms feels responsive)

        const handleScroll = () => {
            // Only activate if the section is in view? 
            // Ideally we want it to react to ANY scroll, but maybe only when this section is visible?
            // For now, let's make it global scroll as requested "plays if user scrolls".

            // Optimization: Check if section is in viewport
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;

                if (isInView) {
                    playVideo();
                    pauseVideo();
                } else {
                    // If out of view, ensure it's paused
                    if (!video.paused) video.pause();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            pauseVideo.cancel();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    src="/bg video.mp4"
                    className="w-full h-full object-cover opacity-60"
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Overlay */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                {/* Left Side: Empty or abstract? User mentioned "content for about us around that and every section around that too in the sides" */}
                <div className="hidden md:block">
                    {/* Placeholder for left side balance or additional graphic */}
                    <div className="w-20 h-1 bg-white/20 mb-8" />
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                        About Akzorium
                    </p>
                </div>

                {/* Right Side: Main Text */}
                <div className="md:text-left">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-grand leading-tight mb-8">
                        The Ecosystem of <br />
                        <span className="text-blue-500">Momentum.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-6">
                        Akzorium is a modern growth and technology ecosystem built to help brands scale through{" "}
                        <span className="text-white font-medium">intelligent systems,</span>{" "}
                        <span className="text-white font-medium">marketing precision,</span> and{" "}
                        <span className="text-white font-medium">structured digital infrastructure.</span>
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 font-bold uppercase tracking-wide text-sm">
                            Our Vision
                        </button>
                    </div>
                </div>

            </motion.div>

            {/* Side decorative lines or indicators based on "screenshot spacing" request */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden xl:block" />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden xl:block" />

        </section>
    );
}
