"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            className="fixed bottom-8 right-8 z-[100] hover:scale-110 transition-transform duration-300"
        >
            <div className="relative w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-black/50 overflow-hidden">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="object-contain filter brightness-0 invert"
                />
            </div>
        </Link>
    );
}
