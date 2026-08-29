import FAQCard from "./FAQCard";

const faqData = [
  {
    title: "Club & Registration",
    icon: "👥",
    questions: [
      {
        q: "How do I register my child?",
        a: "Complete the online registration form and our committee will place your child into the appropriate age group.",
      },
      {
        q: "When do registrations open?",
        a: "Registrations generally open before each Summer and Winter season.",
      },
      {
        q: "What age groups do you cater for?",
        a: "We have boys and girls teams from Under 8s through to Under 18s.",
      },
      {
        q: "Can my child trial first?",
        a: "Yes. Contact us and we'll arrange a suitable training session.",
      },
    ],
  },
  {
    title: "Teams & Competitions",
    icon: "🏀",
    questions: [
      {
        q: "Which competition do teams play in?",
        a: "Lightning Hoops competes in the Cockburn Basketball Association junior competition.",
      },
      {
        q: "How are teams selected?",
        a: "Teams are graded to ensure players compete at an appropriate level.",
      },
      {
        q: "Can my child play with friends?",
        a: "We'll always try to accommodate requests where possible.",
      },
      {
        q: "How many games are played?",
        a: "One game each week plus a weekly training session.",
      },
    ],
  },
  {
    title: "Training & Games",
    icon: "⏰",
    questions: [
      {
        q: "Where are trainings held?",
        a: "Most sessions are held at Wally Hagan Stadium in Hamilton Hill.",
      },
      {
        q: "What happens if training is cancelled?",
        a: "Families are notified via TeamApp and email.",
      },
      {
        q: "Can parents stay and watch?",
        a: "Absolutely! Parents are encouraged to support their children.",
      },
    ],
  },
  {
    title: "Uniforms & Equipment",
    icon: "👕",
    questions: [
      {
        q: "Where do I order uniforms?",
        a: "Uniforms can be ordered through the Uniforms page on our website.",
      },
      {
        q: "What shoes are required?",
        a: "Non-marking basketball shoes are recommended for all players.",
      },
      {
        q: "How do I choose the right size?",
        a: "A sizing chart is available before ordering.",
      },
    ],
  },
  {
    title: "Volunteering",
    icon: "🤝",
    questions: [
      {
        q: "How can I become a coach or manager?",
        a: "We welcome volunteers and provide support and resources.",
      },
      {
        q: "Do all teams have volunteers?",
        a: "Every team relies on parents helping throughout the season.",
      },
    ],
  },
  {
    title: "Fees & Payments",
    icon: "💰",
    questions: [
      {
        q: "Are payment plans available?",
        a: "Yes. Please contact the committee to discuss flexible payment options.",
      },
      {
        q: "What does registration include?",
        a: "Registration covers association fees, insurance and club administration.",
      },
    ],
  },
];

export type FAQSectionType = {
  title: string;
  icon: string;
  questions: {
    q: string;
    a: string;
  }[];
};

export default function FAQSection() {
  return (
    <section className="bg-[#F4F4F4] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <FAQCard section={faqData[0]} />
            <FAQCard section={faqData[2]} />
            <FAQCard section={faqData[4]} />
          </div>

          <div className="space-y-6 lg:col-span-4">
            <FAQCard section={faqData[1]} />
            <FAQCard section={faqData[3]} />
            <FAQCard section={faqData[5]} />
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD400] text-2xl">
                🎓
              </div>

              <h3 className="font-heading mb-2 text-3xl uppercase">
                Still Have a Question?
              </h3>

              <p className="mb-5 text-gray-600">
                We&apos;re here to help our Lightning Hoops families.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  lightninghoops.bc@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  Wally Hagan Stadium
                </div>
                <div className="flex items-center gap-3">
                  <span>📘</span>
                  Follow us on Facebook
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#FFD400] py-3 font-bold text-[#111111] transition hover:bg-[#E6BE00]">
                Contact Us
              </button>
            </div>

            <div className="rounded-2xl bg-[#F8E8A3] p-6">
              <h4 className="font-heading mb-4 text-2xl uppercase">
                Quick Links
              </h4>

              <ul className="space-y-3 font-medium">
                <li className="flex justify-between border-b pb-2">
                  Register <span>›</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  Teams <span>›</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  Fixtures <span>›</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  Uniforms <span>›</span>
                </li>
                <li className="flex justify-between">
                  About Us <span>›</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
