"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, UseInViewOptions } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
    threshold?: number;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.25,
    duration = 0.5,
    yOffset = 75,
    className = "",
    threshold = 0.5
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold } as UseInViewOptions);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yOffset, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
