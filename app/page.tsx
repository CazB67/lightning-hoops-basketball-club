import { clubNumbers } from "./helpers/clubNumbers";
import Slideshow from "./components/Slideshow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6 ">
        <div className="w-full flex flex-col items-center text-center sm:items-start sm:text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Welcome to Lightning Hoops Basketball Club
            </h1>
            <h2 className="font-semibold text-xl italic">
              More than just a game!
            </h2>
        </div>

        <Slideshow />
          
        <div className="w-full flex flex-col grid grid-cols-2 gap-4 items-center justify-center">
            {clubNumbers.map((item) => (
              <div className="p-4 justify-center align-center text-center bg-gray-100 rounded-lg"
                key={item.label}>
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
  );
}
