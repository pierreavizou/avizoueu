/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { readFileSync } from "fs";

const cyberpunk = readFileSync("public/Cyberpunk.ttf");
const russo = readFileSync("public/RussoOne-Regular.ttf");
const notosans = readFileSync("public/NotoSansJP-Bold.ttf");

// export const runtime = "edge";

export async function GET() {
  // const cyberpunk = await fetch(
  //   new URL("../../../public/Cyberpunk.ttf", import.meta.url),
  // ).then((res) => res.arrayBuffer());

  // const russo = await fetch(
  //   new URL("../../../public/RussoOne-Regular.ttf", import.meta.url),
  // ).then((res) => res.arrayBuffer());

  // const notosans = await fetch(
  //   new URL("../../../public/NotoSansJP-Bold.ttf", import.meta.url),
  // ).then((res) => res.arrayBuffer());

  // const avatar = await fetch(
  //   new URL("../../../public/avatar.png", import.meta.url),
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "RussoOne",
          background: "#1b8cff",
          // background:
          //   "radial-gradient(circle, rgb(3, 158, 255) 0%, rgb(119, 69, 255) 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // gap: "2.5rem",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 120,
            display: "flex",
            fontVariant: "small-caps",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <img
            src={`${
              process.env.NEXT_PUBLIC_FRONT_URL ??
              process.env.VERCEL_URL ??
              "http://localhost:3000"
            }/avatar.png`}
            alt=""
            height={200}
            width={200}
          />
          <span>Pierre Avizou</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>{" "}
              <span
                style={{
                  verticalAlign: "middle",
                  marginLeft: "0.5rem",
                }}
              >
                pierre@avizou.eu
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
              <span
                style={{
                  marginLeft: "0.5rem",
                }}
              >
                06 13 64 03 89
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>{" "}
              <span
                style={{
                  marginLeft: "0.5rem",
                }}
              >
                +33 613 640 389
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>{" "}
              <span
                style={{
                  marginLeft: "0.5rem",
                }}
              >
                SIRET: 84012005900026
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
              </svg>{" "}
              <span
                style={{
                  marginLeft: "0.5rem",
                }}
              >
                https://avizou.eu
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>{" "}
              <span
                style={{
                  marginLeft: "0.5rem",
                  // fontSize: 25,
                }}
              >
                FR - EN - ES - DE - IT - 和語
                {/* 🇫🇷 - 🇺🇸 - 🇪🇸 - 🇩🇪 - 🇮🇹 - 🇯🇵 */}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "RussoOne",
          data: russo,
        },
        {
          name: "Cyberpunk",
          data: cyberpunk,
        },
        {
          name: "NotoSans",
          data: notosans,
        },
      ],
      width: 1200,
      height: 600,
    },
  );
}
