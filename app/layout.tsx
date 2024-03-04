import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Russo_One } from "next/font/google";
import { getFrontUrl } from "@/lib/utils";
import { FileText, GithubIcon } from "lucide-react";

const russo = Russo_One({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
  variable: "--font-russo",
});

export const metadata: Metadata = {
  metadataBase: new URL(getFrontUrl()),
  title: "Pierre Avizou | Fullstack developer",
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
        <main className="z-40 flex min-h-screen flex-col items-center bg-blue-purple-radial p-8 md:p-16">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-center bg-purple py-6 dark:bg-blue-dark">
          <div className="[--border-size:2px]">
            <p>&copy; 2018 - {new Date().getFullYear()} Pierre Avizou</p>
            <p className="mb-1">SIRET: 84012005900026</p>
            <a
              className="animated-underline mb-0.5 inline-block"
              href="https://www.linkedin.com/in/pierre-avizou-b31aa392/"
              target="_blank"
            >
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
              <span className="ml-1 align-middle hover:text-secondary dark:hover:text-secondary-foreground/80">
                Linkedin
              </span>
            </a>
            <br />
            <a
              className="animated-underline mb-0.5 inline-block"
              href="https://www.malt.fr/profile/pierreavizou"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Malt"
                role="img"
                className="inline-block w-6"
                viewBox="0 0 512 512"
              >
                {/* <rect width="512" height="512" rx="15%" fill="#fff" /> */}
                <path
                  fill="#FC5656"
                  d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
                />
              </svg>
              <span className="ml-1 align-middle hover:text-secondary dark:hover:text-secondary-foreground/80">
                Malt
              </span>
            </a>
            <br />
            <a
              className="animated-underline mb-0.5 inline-block"
              href="https://nextcloud.avizou.eu/s/yQNkoGqinaqaiKb/download/Resume%20Pierre%20Avizou.pdf"
              target="_blank"
            >
              <FileText className="inline-block w-6 py-0.5" />
              <span className="ml-1 align-middle hover:text-secondary dark:hover:text-secondary-foreground/80">
                My Résumé
              </span>
            </a>
            <br />
            <a
              className="animated-underline mb-0.5 inline-block"
              href="https://github.com/pierreavizou"
              target="_blank"
            >
              <GithubIcon className="inline-block w-6 py-0.5" />
              <span className="ml-1 align-middle hover:text-secondary dark:hover:text-secondary-foreground/80">
                Github
              </span>
            </a>
            <p className="mt-4 text-sm italic">
              Necessary functional cookies only.
            </p>
          </div>
        </footer>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
