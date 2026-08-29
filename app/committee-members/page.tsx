import Image from "next/image";

export default function CommitteeMembersPage() {
  return (
    <div className="w-full ">
    <div className="w-full bg-black text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title column */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            Committe Members
          </h1>
          <p>We are very thankful for our wonderful committee members, whose hard work makes everything at Lightning Hoops possible. As volunteers, they ensure the club runs smoothly and support players and families. Without their commitment, the club wouldn’t survive – they are the heart of our community. We couldn’t do it without them!</p>
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
    </div>
  );
}
