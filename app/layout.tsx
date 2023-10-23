import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Russo_One } from "next/font/google";
// import { Orbitron } from 'next/font/google'

const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo",
});

// const orbitron = Orbitron({ subsets: ['latin'], weight: "400", variable: '--font-russo',})

export const metadata: Metadata = {
  title: "P.A. Dev and more",
  description: "Pierre likes to write code and solve problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${russo.variable}`}>
        <main>{children}</main>
        <footer className="flex flex-col items-center justify-center bg-purple py-6 dark:bg-blue-dark">
          <div>
            <p>&copy; 2018 - 2023 Pierre Avizou</p>
            <p>SIRET: 84012005900026</p>
            <a href="https://www.linkedin.com/in/pierre-avizou-b31aa392/">
              <svg
                className="inline-block w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#3b82f6"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                ></path>
              </svg>
              <span className="ml-1 align-middle">Linkedin</span>
            </a>
            <p className="mt-4 text-sm italic">
              No cookies stored, no data collected.
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
