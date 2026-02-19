"use client";

import React, { useRef, useEffect, useState } from "react";

interface VideoBackgroundWrapperProps {
    children: React.ReactNode;
}

const FRAME_COUNT = 240;
const FRAME_PATH = (index: number) => `/frames/frame_${index.toString().padStart(4, "0")}.webp`;

export default function VideoBackgroundWrapper({ children }: VideoBackgroundWrapperProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // Refs for animation state- to avoid re-renders
    const frameRef = useRef({
        current: 0,
        target: 0,
        images: [] as HTMLImageElement[]
    });

    useEffect(() => {
        // Preload images - Just start loading them
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = FRAME_PATH(i);
            images.push(img);
        }
        frameRef.current.images = images;

        // Cleanup
        return () => {
            images.forEach(img => img.onload = null);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        // Render loop
        let animationFrameId: number;

        const render = () => {
            // Lerp for smooth scrubbing
            // current = current + (target - current) * factor
            const diff = frameRef.current.target - frameRef.current.current;

            // If difference is small enough, snap to target to save calculation/battery
            if (Math.abs(diff) < 0.05) {
                frameRef.current.current = frameRef.current.target;
            } else {
                frameRef.current.current += diff * 0.1; // 0.1 = smoothness factor
            }

            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.round(frameRef.current.current))
            );

            // Draw
            const img = frameRef.current.images[frameIndex];
            if (img && img.complete) {
                // Calculate cover dimensions
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasRatio > imgRatio) {
                    // Canvas is Wider -> Match Width (Cover), Crop Height
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    // Canvas is Taller -> Match Height (Cover), Crop Width
                    drawWidth = canvas.height * imgRatio;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        // Start render loop
        render();

        // Handle Resize
        let pricingOffset = 0;
        const handleResize = () => {
            if (containerRef.current && canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            // Calculate limit based on target section
            // USER INSTRUCTION: To change when animation ends, change "services" to "pricing" (or any section ID) below.
            const targetSection = document.getElementById("services");

            if (targetSection && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const targetRect = targetSection.getBoundingClientRect();

                // Finish animation when target section is partially visible (e.g. 60% up the screen)
                const offsetToEnd = targetRect.top - containerRect.top;
                pricingOffset = Math.max(100, offsetToEnd - window.innerHeight * 0.6);
            } else {
                if (containerRef.current) {
                    pricingOffset = containerRef.current.clientHeight - window.innerHeight;
                }
            }
        };

        handleResize(); // Initial size
        window.addEventListener("resize", handleResize);

        // Handle Scroll
        const handleScroll = () => {
            if (!containerRef.current) return;

            // We want the animation to play over the course of the "VideoBackgroundWrapper" content
            // However, the wrapper is currently just a sticky background + relative content.
            // The user requested scroll-scrubbing. This usually implies the background is fixed 
            // and the content scrolls over it, DRIVING the animation.
            // The scroll progress should be based on how far we've scrolled down the PAGE or the SECTION.
            // Since this wrapper wraps effectively the WHOLE page content (About...Contact), 
            // likely we want to map the ENTIRE scrollable height of this wrapper to the frames.

            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate progress
            // Start: when top of container enters viewport (or is at top) -> actually it's sticky at top 0.
            // But the content is "relative z-10 -mt-[100vh]".
            // So physically the containerRef (wrapper) starts at top of page (below Hero).
            // Let's use window.scrollY relative to document height?
            // Or better: The containerRef is the parent div.
            // rect.top is position relative to viewport. 
            // Since it's sticky?? No, the INNER div is sticky. The OUTER div (containerRef) flows with page.
            // Actually, in previous code:
            // <div ref={containerRef} className="relative min-h-screen bg-black">
            //    <div className="sticky top-0..."> <video /> </div>
            //    <div className="relative ..."> {children} </div>
            // </div>
            // So containerRef tracks the whole height of content.

            // Progress = how much of the container has been scrolled past.
            // When rect.top = 0, we are at start.
            // When rect.bottom = viewportHeight, we are at end.

            // rect.top is 0 when container starts. Becomes negative as we scroll.
            // Scrolled amount within container = -rect.top
            const scrolledDistance = -rect.top;

            // We want to complete the animation over `pricingOffset` distance.

            let progress = 0;
            if (pricingOffset > 0) {
                progress = scrolledDistance / pricingOffset;
            }

            // Clamp progress 0 to 1
            const clampedProgress = Math.min(Math.max(progress, 0), 1);

            // Map to frames
            frameRef.current.target = clampedProgress * (FRAME_COUNT - 1);

            // Fade out canvas when animation finishes (at Services)
            if (canvasRef.current) {
                // If we reached the target (progress >= 1), fade out
                if (progress >= 0.99) {
                    canvasRef.current.style.opacity = "0";
                } else {
                    canvasRef.current.style.opacity = "1";
                }
            }

            // Update Blur Overlay Opacity
            // Fade in from 0.6 to 1.0 progress
            const blurOverlay = document.getElementById("global-blur-overlay");
            if (blurOverlay) {
                // Calculate opacity: 0 at progress 0.6, 1 at progress 1.0
                const blurOpacity = Math.max(0, Math.min(1, (clampedProgress - 0.6) / 0.4));
                blurOverlay.style.opacity = blurOpacity.toString();
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black">
            {/* Sticky Canvas Container */}
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                    style={{ opacity: 1 }}
                />

                {/* Blur Overlay - Fades in near end of animation */}
                <div
                    id="global-blur-overlay"
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-none"
                    style={{ opacity: 0 }}
                />
            </div>

            {/* Content Container - Relative to sit on top */}
            <div className="relative z-10 -mt-[100vh]">
                {children}
            </div>
        </div>
    );
}
