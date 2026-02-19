"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact"; // Reusing existing component
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="pt-32 pb-10 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold uppercase font-grand mb-6"
                >
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Collaborate</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Ready to accelerate? Reach out and let's build something exceptional.
                </p>
            </section>

            <ContactSection />

            <Footer />
        </main>
    );
}
