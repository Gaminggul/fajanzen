"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ScrollRevealInit({ locale }: { locale: string }) {
  useScrollReveal(locale);
  return null;
}
