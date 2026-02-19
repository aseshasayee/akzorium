"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "./TextReveal";

const projects = [
    { id: 1, name: "Project Alpha", category: "Brand Strategy" },
    { id: 2, name: "Project Beta", category: "Web Development" },
    { id: 3, name: "Project Gamma", category: "Marketing" },
];

export default function Projects() {
    return (
        <section id="works" className="relative py-32 px-6 overflow-hidden bg-transparent">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className="mb-24 text-center">
                    <TextReveal
                        text="Selected Works"
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-grand"
                    />
                </div>

                {/* Projects Grid/List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/5 backdrop-blur-md"
                        >
                            {/* Placeholder Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">{project.category}</span>
                                    <div className="p-2 rounded-full border border-white/20 bg-black/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold uppercase tracking-wider font-grand">{project.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">
                        View All Works
                    </button>
                </div>
            </div>
        </section>
    );
}
