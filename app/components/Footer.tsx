import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-yellow-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 — Club Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Lightning Hoops Basketball Club</h3>
          <p className="text-sm">More than a game.</p>
          <p className="text-sm">
            Affiliated with Cockburn Basketball Association
          </p>
          <p className="text-sm">
            Wally Hagan Stadium
            <br />
            Hamilton Hill, WA
          </p>
        </div>

        {/* Column 2 — Quick Links (2-column grid) */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Quick Links</h3>

          <div className="grid grid-cols-2 gap-2">
            <Link href="/about-us" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/junior-teams" className="hover:text-white transition">
              Junior Teams
            </Link>
            <Link href="/fixtures" className="hover:text-white transition">
              Fixtures
            </Link>
            <Link href="/coaches" className="hover:text-white transition">
              Coaches
            </Link>
            <Link
              href="/committee-members"
              className="hover:text-white transition"
            >
              Committee Members
            </Link>
            <Link href="/faq" className="hover:text-white transition">
              FAQ
            </Link>
            <Link href="/gallery" className="hover:text-white transition">
              Gallery
            </Link>
          </div>
        </div>

        {/* Column 3 — Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-sm">lightninghoops.bc@gmail.com</p>

          <div className="flex gap-4 mt-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              className="hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-yellow-300/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Lightning Hoops Basketball Club — All
        rights reserved.
      </div>
    </footer>
  );
}
