/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import Component from "./component";
import logAccess from "@/lib/server/logFileAccess";

export const runtime = "nodejs";

// const cyberpunk = readFileSync("public/Cyberpunk.ttf");
const russo = readFileSync(
  path.join(process.cwd(), "assets", "RussoOne-Regular.ttf"),
);
const notosans = readFileSync(
  path.join(process.cwd(), "assets", "NotoSansJP-Bold.ttf"),
);

export async function GET(req: NextRequest) {
  await logAccess(req, req.nextUrl?.pathname);
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

  return new ImageResponse(<Component />, {
    fonts: [
      {
        name: "RussoOne",
        data: russo,
      },
      // {
      //   name: "Cyberpunk",
      //   data: cyberpunk,
      // },
      {
        name: "NotoSans",
        data: notosans,
      },
    ],
    width: 1200,
    height: 600,
  });
}
