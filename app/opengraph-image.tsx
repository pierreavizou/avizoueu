/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import Component from "@/components/OpengraphImage";
import logAccess from "@/lib/server/logFileAccess";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const russo = readFileSync(
  path.join(process.cwd(), "assets", "RussoOne-Regular.ttf"),
);
const notosans = readFileSync(
  path.join(process.cwd(), "assets", "NotoSansJP-Bold.ttf"),
);

export default async function Image(req: NextRequest) {
  await logAccess(req, req.nextUrl?.pathname);

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
