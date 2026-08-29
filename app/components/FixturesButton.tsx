"use client";

import CalendarIcon from "./CalendarIcon";

export default function FixturesButton() {
  return (
    <a
  href="https://www.playhq.com/basketball-wa/org/lightning-hoops-basketball-club/1069e251"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-yellow-300 border border-yellow-300 px-3 py-2 rounded-md 
             hover:bg-yellow-300 hover:text-black transition cursor-pointer group"
>
  <CalendarIcon className="text-yellow-300 group-hover:text-white transition" />
  Fixtures
</a>
  );
}
