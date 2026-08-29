"use client";

import { useState } from "react";
import type { FAQSectionType } from "./FAQSection"; // adjust path

export default function FAQCard({ section }: { section: FAQSectionType }) {
  const [open, setOpen] = useState<number | null>(null);
  console.log("section", section);
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD400] text-xl">
          {section.icon}
        </div>

        <h3 className="font-heading text-3xl uppercase text-[#111111]">
          {section.title}
        </h3>
      </div>

      <div className="space-y-2">
        {section.questions.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold hover:bg-gray-50"
            >
              <span>{item.q}</span>
              <span className="text-xl text-[#F5B400]">
                {open === i ? "−" : "+"}
              </span>
            </button>

            {open === i && (
              <div className="border-t bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
