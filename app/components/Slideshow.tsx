"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/photos/LHlogo.png",
  "/photos/teamphoto1.webp",
  "/photos/teamphoto2.webp",
  "/photos/team-photo.jpeg"
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-4">
      {/* Slideshow */}
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xs">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="Team Photos"
            fill
            priority
            className={`
              absolute inset-0 object-cover transition-opacity duration-1000
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Dots */}
   <div className="flex gap-2">
  {images.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`
        h-2 rounded-full transition-all
        ${i === index ? "w-6 bg-yellow-300" : "w-2 bg-gray-300"}
      `}
    />
  ))}
</div>



    </div>
  );
}
