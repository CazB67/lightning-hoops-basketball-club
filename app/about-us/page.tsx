import Image from "next/image";
import { ourValues } from "@/helpers/ourValues";

export default function AboutUsPage() {
  return (
    <div className="w-full ">
    <div className="w-full bg-black text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title column */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            About Us
          </h1>
          <p>Established in 2017 by three local families in Coogee, WA, Lightning Hoops has grown into a vibrant basketball community with 53 teams, ranging from boys’ and girls’ teams in Under 8 to Under 18. With over 450 members, our club continues to expand, creating an environment where players of all ages and skill levels can thrive.</p>
        </div>

        {/* Square Image column */}
        <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0">
          <Image
            src="/photos/girldriving.webp"
            alt="Girl playing basketball"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
    </div>
    <div className="w-full bg-white text-black py-8 px-4">  <div className="w-full flex flex-col justify-center align-center items-center text-center">
        <p className="font-bold">OUR VALUES</p>
        <div className="w-full flex flex-col grid md:grid-cols-4 grid-cols-2 p-4 pt-px gap-4 items-center justify-center">
          {ourValues.map((item) => (
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
      </div> <p>Established in 2017 by three local families in Coogee, WA, Lightning Hoops has grown into a vibrant basketball community with 53 teams, ranging from boys’ and girls’ teams in Under 8 to Under 18. With over 450 members, our club continues to expand, creating an environment where players of all ages and skill levels can thrive.</p></div>
    </div>
  );
}
