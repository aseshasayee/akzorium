"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden">


            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />

            <div className="relative z-10 max-w-4xl text-center mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-wide"
                >
                    <span className="font-bold text-white">Akzorium</span> is a modern{" "}
                    <span className="text-white font-bold italic">growth and technology</span> ecosystem
                    built to help brands scale through{" "}
                    <span className="block mt-4 md:mt-6">
                        <span className="font-bold text-white">intelligent systems</span>, <br className="hidden md:block" />
                        <span className="font-bold text-white">marketing precision</span>, <br className="hidden md:block" />
                        and <span className="font-bold text-white">structured digital infrastructure</span>.
                    </span>
                </motion.p>
            </div>
        </section>
    );
}
