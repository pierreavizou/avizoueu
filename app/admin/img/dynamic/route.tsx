import { ImageResponse } from "next/server";
// import { readFileSync } from "fs";

// const cyberpunk = readFileSync("public/Cyberpunk.ttf");
// const russo = readFileSync("public/RussoOne-Regular.ttf");
export const runtime = "edge";

export async function GET() {
  const cyberpunk = await fetch(
    new URL("../../../../public/Cyberpunk.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const russo = await fetch(
    new URL("../../../../public/RussoOne-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "RussoOne",
          background: "#1b8cff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 160,
            display: "flex",
            // fontFamily: "RussoOne",
          }}
        >
          Hello world!
        </div>
        <div style={{ display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
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
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Cyberpunk",
          data: cyberpunk,
        },
        {
          name: "RussoOne",
          data: russo,
        },
      ],
      width: 1200,
      height: 600,
    },
  );
}
