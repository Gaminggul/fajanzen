import { makeStars } from "@/lib/random";

interface StarfieldProps {
    count?: number;
    seed?: number;
}

// Cache computed star arrays by "count:seed" key to avoid recomputing on every render
const starCache = new Map<string, ReturnType<typeof makeStars>>();

function getCachedStars(count: number, seed: number) {
    const key = `${count}:${seed}`;
    if (!starCache.has(key)) {
        starCache.set(key, makeStars(count, seed));
    }
    return starCache.get(key)!;
}

export default function Starfield({ count = 120, seed = 123 }: StarfieldProps) {
    const stars = getCachedStars(count, seed);
    return (
        <div
            className="stars-background"
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
