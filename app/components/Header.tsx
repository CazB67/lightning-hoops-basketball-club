"use client";

import Image from "next/image";
import { useState } from "react";
import { menuItems } from "@/helpers/menuItems";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-yellow-300">
      {/* Row 1: Logo + Title + Hamburger */}
     <div className="flex flex-row items-center justify-between gap-2 z-50 px-2">

  {/* LEFT: Logo + Title */}
  <div className="flex flex-row items-center gap-2 p-2">
    <div className="flex items-center justify-center rounded-full">
      <Image
        className="p-px"
        src="/logo.png"
        alt="Next.js logo"
        width={40}
        height={40}
        priority
      />
    </div>

    <Link
      href="/"
      className="leading-6 tracking-tight dark:text-zinc-50 font-bold"
      onClick={() => setSelected("")}
    >
      LIGHTNING HOOPS BASKETBALL CLUB
    </Link>
  </div>

  {/* RIGHT: Social Icons */}
  <div className="flex gap-2 pr-2">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/lightninghoopsbc"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-300 hover:text-white transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" className="w-6 h-6">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
      </svg>
    </a>
  </div>

  {/* Hamburger (mobile) */}
  <button
    className="hamburger md:hidden relative w-10 h-10 flex items-center justify-center bg-transparent"
    onClick={() => setOpen(!open)}
  >
    {/* lines */}
    <span className={`absolute w-8 h-0.5 bg-slate-50 transition-all duration-300 ${open ? "rotate-45 translate-y-0" : "-translate-y-3"}`} />
    <span className={`absolute w-8 h-0.5 bg-slate-50 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
    <span className={`absolute w-8 h-0.5 bg-slate-50 transition-all duration-300 ${open ? "-rotate-45 translate-y-0" : "translate-y-3"}`} />
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
