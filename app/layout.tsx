import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // import client header

export const metadata: Metadata = {
  title: "Lightning Hoops Basketball Club",
  description: "More than a game",
};

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-8 px-4 bg-white dark:bg-black sm:items-start">
            <div className="w-full flex flex-col gap-6 items-center text-center sm:items-start sm:text-left">
              
  
                {children}
              
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
