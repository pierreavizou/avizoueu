/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import avatar from "@/public/avatar.png";

export default function Home() {
  return (
    <>
      <main className="z-40 flex min-h-screen flex-col items-center bg-blue-purple-radial p-16">
        <div
          id="avatar"
          className="smallcaps flex flex-col font-russo sm:flex-row"
        >
          <div className="self-center transition-all duration-500">
            <Image
              src={avatar}
              alt="Avatar"
              width={128}
              height={128}
              className="p-3"
            />
          </div>
          <h1 className="ml-4 self-center pt-2 text-center align-middle text-4xl">
            Pierre Avizou
          </h1>
        </div>
        <div className="my-auto flex flex-col items-center md:max-w-4xl">
          <div>
            <p className="text-center text-5xl font-bold uppercase md:text-7xl">
              {" "}
              Skills and brainpower for hire.
            </p>
          </div>
          <div className="mt-14">
            <p className="text-center text-2xl font-bold md:text-3xl">
              I solve complex problems so you don't have to.
            </p>
          </div>
          <div className="justify-self-center">
            <p className="mt-14 inline-block rounded bg-blue-700 p-3 text-lg hover:bg-blue">
              hi<span className="hidden">&nbsp;</span>@
              <span className="hidden">&nbsp;</span>avizou
              <span className="hidden">&nbsp;</span>.
              <span className="hidden">&nbsp;</span>eu
            </p>
          </div>
        </div>
      </main>
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
    </>
  );
}
