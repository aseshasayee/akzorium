"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
    // Split text into words or characters. 
    // For a premium feel, let's split by characters but stagger them.
    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: delay,
            },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                damping: 20,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                damping: 20,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.span
            style={{ display: "inline-block" }} // Ensures flex/block behavior doesn't break
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : "auto" }}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
