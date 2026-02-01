"use client";

import { useMemo } from "react";
import { makeStars } from "@/lib/random";

interface StarfieldProps {
    count?: number;
    seed?: number;
}

export default function Starfield({ count = 120, seed = 123 }: StarfieldProps) {
    const stars = useMemo(() => makeStars(count, seed), [count, seed]);
    return (
        <div
            className="stars-background"
            suppressHydrationWarning
            aria-hidden="true"
        >
            {stars.map((s, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        animationDuration: `${s.dur}s`,
                    }}
                />
            ))}
        </div>
    );
}
