/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.png";
import EmailButton from "@/components/EmailButton";

export default function Home() {
  return (
    <>
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
      <div className="my-auto flex flex-col items-center py-10 md:max-w-4xl">
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
        <div className="flex flex-col justify-self-center">
          <EmailButton />
          <Link
            className="bg-green mt-4 inline-block cursor-pointer rounded p-3 text-center text-lg hover:bg-green-500"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
