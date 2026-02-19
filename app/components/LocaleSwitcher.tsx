"use client";

import { useRouter } from "next/navigation";
import { type Locale, LOCALE_OPTIONS, handleLocaleChange } from "@/lib/locale";

export default function LocaleSwitcher({
  locale,
  path = "",
}: {
  locale: Locale;
  path?: string;
}) {
  const router = useRouter();

  return (
    <div
      className="flex justify-center gap-2 md:justify-end"
      role="group"
      aria-label="Language"
    >
      {LOCALE_OPTIONS.map((option) => {
        const isActive = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() =>
              handleLocaleChange(option.value, locale, path, router.push)
            }
            aria-pressed={isActive}
            className={`rounded-full border px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] transition ${
              isActive
                ? "border-emerald-200/70 bg-emerald-200/20 text-emerald-100"
                : "border-white/20 text-slate-200 hover:border-emerald-200/50 hover:text-emerald-100"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
