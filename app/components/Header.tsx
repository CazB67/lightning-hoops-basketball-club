"use client";

import Image from "next/image";
import { useState } from "react";
import { menuItems } from "../helpers/menuItems";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  console.log(selected);
  return (
    <header className="relative flex flex-col w-full bg-black text-yellow-300 font-semibold text-xl gap-2">
      {/* Row 1: Logo + Title + Hamburger */}
      <div className="flex flex-row items-center justify-between gap-2 z-50 px-2">
        <div className="flex flex-row items-center gap-2 p-2">
          <div className="flex items-center justify-center rounded-full bg-white p-2">
            <Image
              className="p-px"
              src="/logo.png"
              alt="Next.js logo"
              width={28}
              height={28}
              priority
            />
          </div>

          <Link
            href="/"
            className="leading-6 tracking-tight dark:text-zinc-50"
            onClick={() => setSelected("")}
          >
            Lightning Hoops Basketball Club
          </Link>
        </div>

        <button
          className="hamburger md:hidden relative w-10 h-10 flex items-center justify-center bg-transparent"
          onClick={() => setOpen(!open)}
        >
          {/* Line 1 */}
          <span
            className={`
      absolute w-8 h-0.5 bg-slate-50 transition-all duration-300
      ${open ? "rotate-45 translate-y-0" : "-translate-y-3"}
    `}
          />

          {/* Line 2 */}
          <span
            className={`
      absolute w-8 h-0.5 bg-slate-50 transition-all duration-300
      ${open ? "opacity-0" : "opacity-100"}
    `}
          />

          {/* Line 3 */}
          <span
            className={`
      absolute w-8 h-0.5 bg-slate-50 transition-all duration-300
      ${open ? "-rotate-45 translate-y-0" : "translate-y-3"}
    `}
          />
        </button>
      </div>

      <menu
        className={`
    md:static md:flex md:flex-row md:flex-wrap md:justify-center
    md:max-h-none md:opacity-100 md:translate-y-0 
    md:gap-y-4 md:gap-x-1

    absolute left-0 top-full w-full bg-black z-50
    overflow-hidden transition-all duration-300 ease-out
    ${open ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}

    flex flex-col md:flex-row
    gap-3 items-center text-xs list-none p-2
    overflow-y-auto
  `}
      >
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.path}
              className={`
    links whitespace-nowrap w-fit p-2
    active:bg-yellow-300 active:text-black        /* mobile touch */
    ${selected === item.label ? "bg-yellow-300 text-black" : ""}
  `}
              onClick={() => {
                setSelected(item.label);
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </menu>
    </header>
  );
}
