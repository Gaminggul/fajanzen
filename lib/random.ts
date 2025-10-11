// lib/random.ts (shared, no React)
export function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Star = { top: number; left: number; size: number; dur: number };

export function makeStars(count: number, seed = 123): Star[] {
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, () => ({
    top: rnd() * 120,           // Prozent
    left: rnd() * 100,
    size: 1 + rnd() * 1,        // px
    dur: 2 + rnd() * 2,         // s
  }));
}
