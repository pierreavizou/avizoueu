/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import avatar from "@/public/avatar.png";

export default function Home() {
  return (
    <>
      <main className="bg-blue-purple-radial flex min-h-screen flex-col items-center p-16 z-40">
        <div
          id="avatar"
          className="flex flex-col sm:flex-row smallcaps font-russo"
        >
          <div className="transition-all duration-500">
            <Image
              src={avatar}
              alt="Avatar"
              width={128}
              height={128}
              className="self-center p-3"
            />
          </div>
          <h1 className="text-4xl text-center align-middle ml-4 pt-2 self-center">
            Pierre Avizou
          </h1>
        </div>
        <div className="flex flex-col my-auto items-center md:max-w-4xl">
          <div>
            <p className="text-center uppercase font-bold text-5xl md:text-7xl">
              {" "}
              Skills and brainpower for hire.
            </p>
          </div>
          <div className="mt-14">
            <p className="text-center font-bold text-2xl md:text-3xl">
              I solve complex problems so you don't have to.
            </p>
          </div>
          <div className="justify-self-center">
            <p className="bg-blue-700 hover:bg-blue inline-block p-3 rounded text-lg mt-14">
              hi@avizou.eu
            </p>
          </div>
        </div>
      </main>
      <footer className="h-32 bg-purple dark:bg-blue-dark flex flex-col items-center justify-center z-0">
        <div>
          <p>&copy; 2023 Pierre Avizou</p>
          <p>SIRET: 84012005900026</p>
          <a href="https://www.linkedin.com/in/pierre-avizou-b31aa392/">
            <svg
              className="w-6 inline-block"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#3b82f6"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              ></path>
            </svg>
            <span className="align-middle ml-1">Linkedin</span>
          </a>
        </div>
      </footer>
    </>
  );
}
