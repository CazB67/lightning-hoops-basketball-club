import Image from "next/image";
import FAQSection from "../components/FAQSection";

export default function FAQPage() {
  return (
    <div className="w-full ">
      <div className="w-full bg-black text-white py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title column */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-left">
              Everything you need to know about Lightning Hoops.{" "}
            </p>
          </div>

          {/* Square Image column */}
          <div className="flex justify-center items-center w-full">
            <div className="relative aspect-[3/2] w-full max-w-sm">
              <Image
                src="/photos/storm-boys.jpg"
                alt="Storm boys"
                fill
                className="object-cover rounded-md relative"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black py-8 px-4">
        <FAQSection />
      </div>
    </div>
  );
}
