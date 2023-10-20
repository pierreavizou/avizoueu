/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_KEY ?? "",
);

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string } },
) {
  const headersList = headers();
  // console.log("headersList", headersList);
  console.log("req.ip", req.ip);
  console.log("req.geo", req.geo);
  let ip = req.ip ?? headersList.get("x-real-ip");
  const forwardedFor = headersList.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }
  console.log("ip", ip);

  const userAgent = headersList.get("user-agent");
  console.log("userAgent", userAgent);
  const geo = {
    country: headersList.get("x-vercel-ip-country"),
    countryRegion: headersList.get("x-vercel-ip-country-region"),
    latitude: headersList.get("x-vercel-ip-latitude"),
    longitude: headersList.get("x-vercel-ip-longitude"),
    timezone: headersList.get("x-vercel-ip-timezone"),
  };
  console.log("geo", geo);

  const acceptLanguage = headersList.get("accept-language");
  console.log("acceptLanguage", acceptLanguage);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src={`https://wekujktwjytshhlqfrew.supabase.co/storage/v1/object/public/Assets/${params.filename}`}
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
