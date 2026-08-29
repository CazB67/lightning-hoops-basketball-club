import Image from "next/image";
import { ourValues } from "@/helpers/ourValues";

export default function AboutUsPage() {
  return (
    <div className="w-full ">
      <div className="w-full bg-black text-white py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title column */}
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight">
              About Us
            </h1>
            <p className="text-left">
              Established in 2017 by three local families in Coogee, WA,
              Lightning Hoops has grown into a vibrant basketball community with
              53 teams, ranging from boys’ and girls’ teams in Under 8 to Under
              18. With over 450 members, our club continues to expand, creating
              an environment where players of all ages and skill levels can
              thrive.
            </p>
            <p className="text-left">
              Lightning Hoops is proudly affiliated with Cockburn Basketball
              Association and plays its home games at Wally Hagan Stadium in
              Hamilton Hill, Western Australia. While basketball is at the heart
              of everything we do, Lightning Hoops is more than just a game —
              it’s about building connections, creating memories, and fostering
              a sense of family. We offer a dynamic and supportive environment
              where players can refine their skills, build lasting friendships,
              and experience the true spirit of teamwork and community.
            </p>
          </div>

          {/* Square Image column */}
          <div className="flex justify-center items-center w-full">
            <div className="relative aspect-square w-full max-w-sm">
              <Image
                src="/photos/girldriving.webp"
                alt="Girl playing basketball"
                fill
                className="object-cover rounded-md"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black py-8 px-4">
        <div className="w-full flex flex-col justify-center align-center items-center text-center">
          <p className="font-bold">OUR VALUES</p>
          <div className="w-full flex flex-col grid md:grid-cols-4 grid-cols-2 p-4 pt-px gap-4 items-center justify-center">
            {ourValues.map((item) => (
              <div
                className="w-full h-40 flex flex-col justify-center items-center text-center bg-gray-100 rounded-lg"
                key={item.label}
              >
                <div className="flex justify-center align-center p-3">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={50}
                    height={50}
                    priority
                    className="w-[30px] h-auto"
                    style={{ height: "auto" }}
                  />
                </div>
                <h2 className="font-bold text-xl">{item.number}</h2>
                <p className="text-sm p-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            A place for every player
          </h1>
          <p className="text-left">
            Whether you’re a seasoned player or just starting out, we ensure
            every individual feels right at home. Our passionate team of
            volunteers works tirelessly to offer guidance, motivation, and
            opportunities for growth, making sure each player reaches their full
            potential. At Lightning Hoops, we are more than just a sports club —
            we’re a tight-knit community, united by a shared love for basketball
            and the connections we build both on and off the court. It’s not
            just about the game – it’s about belonging, personal growth, and the
            friendships that turn into family.
          </p>
        </div>
      </div>
    </div>
  );
}
