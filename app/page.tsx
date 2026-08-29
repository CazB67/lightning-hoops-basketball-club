import { clubNumbers } from "@/helpers/clubNumbers";
import Slideshow from "./components/Slideshow";
import Image from "next/image";
import FixturesButton from "./components/FixturesButton";

export default function Home() {
  return (
    <div className="w-full flex-col flex flex- flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6 ">
      <div className="w-full flex flex-col md:flex-row py-8 px-4 bg-black">
        <div className="w-full flex flex-col gap-4 items-center text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-white dark:text-zinc-50 pt-px">
            Welcome to Lightning Hoops Basketball Club!
          </h1>
          <h2 className="font-semibold text-xl italic text-white">
            <span className="text-yellow-300">More</span> than{" "}
            <span className="text-yellow-300">just</span> a{" "}
            <span className="text-yellow-300">game!</span>
          </h2>
          <p className="text-white">
            Developing confident players, great teammates and a strong community
            both on and off the court.
          </p>
         <FixturesButton/>
        </div>
        <Slideshow />
      </div>
      <div className="w-full flex flex-col justify-center align-center items-center text-center">
        <p className="font-bold">LIGHTNING HOOPS BY THE NUMBERS</p>
        <div className="w-full flex flex-col grid md:grid-cols-4 grid-cols-2 p-4 pt-px gap-4 items-center justify-center">
          {clubNumbers.map((item) => (
            <div
              className="p-4 justify-center align-center text-center bg-gray-100 rounded-lg"
              key={item.label}
            >
              <div className="flex justify-center align-center p-3">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={50}
                  priority
                />
              </div>
              <h2 className="font-bold text-xl">{item.number}</h2>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
