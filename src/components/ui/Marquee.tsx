"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export const Marquee = ({
    children,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: MarqueeProps) => {
    const [start, setStart] = useState(false);

    useEffect(() => {
        // Slight delay to ensure hydration matches
        setStart(true);
    }, []);

    const getSpeed = () => {
        switch (speed) {
            case "fast":
                return "20s";
            case "normal":
                return "40s";
            case "slow":
                return "80s";
            default:
                return "40s";
        }
    };

    return (
        <div
            className={cn(
                "group flex gap-4 overflow-hidden py-2 w-full mask-gradient",
                className
            )}
            style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <div
                className={cn("flex min-w-full shrink-0 items-center justify-around gap-4", {
                    "animate-scroll-left": direction === "left" && start,
                    "animate-scroll-right": direction === "right" && start,
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                })}
                style={{ animationDuration: getSpeed() }}
            >
                {children}
            </div>
            <div
                aria-hidden="true"
                className={cn("flex min-w-full shrink-0 items-center justify-around gap-4", {
                    "animate-scroll-left": direction === "left" && start,
                    "animate-scroll-right": direction === "right" && start,
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                })}
                style={{ animationDuration: getSpeed() }}
            >
                {children}
            </div>
        </div>
    );
};
