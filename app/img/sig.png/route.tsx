/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_KEY ?? "",
);

export async function GET(req: NextRequest) {
  const headersList = headers();
  console.log("headersList", headersList);
  console.log("req.ip", req.ip);
  console.log("req.geo", req.geo);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src="https://wekujktwjytshhlqfrew.supabase.co/storage/v1/object/public/Assets/sig.png"
          alt=""
          width={401}
          height={123}
        />
      </div>
    ),
    {
      // width: 1200,
      // height: 630,
      width: 401,
      height: 123,
      emoji: "twemoji",
    },
  );
}
