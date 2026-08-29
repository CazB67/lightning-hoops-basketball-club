import Image from "next/image";
export default function CoachesPage() {
  return (
    <div className="w-full ">
      <div className="w-full bg-black text-white py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title column */}
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight">
              Coaches
            </h1>
            <p>
              The role of a coach is to teach the kids how to play. Training is
              an important part of playing any sport, kids will enjoy playing
              more when they know what they are doing and why they are doing it.
              </p><p>Parents and spectators will enjoy watching their kids play when
              they know what is going on too. Parents / Guardians are welcome to
              join in at training sessions when you can and ask questions if you
              have any.
            </p>
          </div>

          {/* Square Image column */}
          <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0">
            <Image
              src="/malvinas-back-side.webp"
              alt="Girl playing basketball"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 py-8 px-4">
       <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            Coaching Requirements
          </h1><p>Team Coaches must be at least 13 years of age in the year of the course enrolled and no specific basketball background is required.</p></div>
    </div>
  );
}
