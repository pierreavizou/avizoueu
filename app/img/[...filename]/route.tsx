/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;
// export const fetchCache = "force-no-store";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_KEY ?? "",
);

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string[] } },
) {
  const headersList = headers();

  let ip = req.ip ?? headersList.get("x-real-ip");
  const forwardedFor = headersList.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }
  const userAgent = headersList.get("user-agent");
  const geo = {
    country: headersList.get("x-vercel-ip-country"),
    countryRegion: headersList.get("x-vercel-ip-country-region"),
    latitude: headersList.get("x-vercel-ip-latitude"),
    longitude: headersList.get("x-vercel-ip-longitude"),
    timezone: headersList.get("x-vercel-ip-timezone"),
  };
  const acceptLanguage = headersList.get("accept-language");

  let metadata;
  if (req.nextUrl.searchParams.has("metadata")) {
    const decoded = Buffer.from(
      req.nextUrl.searchParams.get("metadata")!,
      "base64",
    ).toString("utf8");
    req.nextUrl.searchParams.delete("metadata");
    try {
      metadata = JSON.parse(decoded);
    } catch (e) {
      console.error("Could not parse metadata to JSON", e);
    }
  }

  const queryString =
    decodeURIComponent(req.nextUrl.searchParams.toString()) || null;
  const parsedQueryString = queryString
    ? Object.fromEntries(req.nextUrl.searchParams)
    : null;

  const filename = params.filename;

  try {
    const { error } = await supabase.from("access_logs").insert({
      ip,
      userAgent,
      acceptLanguage,
      geo,
      filename,
      queryString,
      parsedQueryString,
      metadata,
    });
    if (error) console.error("Could not save data to Supabase", error);
  } catch (e) {
    console.error("Could not communicate with Supabase", e);
  }

  console.log("filename", filename);

  try {
    const img = await fetch(
      `${process.env.SUPABASE_URL}/storage/v1/object/public/${filename.join(
        "/",
      )}`,
    );

    if (img.status !== 200) {
      return new Response("Not found", {
        status: 404,
      });
    }

    return new Response(await img.arrayBuffer(), {
      headers: {
        "Content-Type": img.headers.get("Content-Type") ?? "",
        "Cache-Control": "no-cache",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response("An error occured", {
      status: 500,
    });
  }

  // return new ImageResponse(
  //   (
  //     <div
  //       style={{
  //         display: "flex",
  //       }}
  //     >
  //       <img
  //         src={`https://wekujktwjytshhlqfrew.supabase.co/storage/v1/object/public/Assets/${filename}`}
  //         alt=""
  //         width={401}
  //         height={123}
  //       />
  //     </div>
  //   ),
  //   {
  //     // width: 1200,
  //     // height: 630,
  //     width: 401,
  //     height: 123,
  //     emoji: "twemoji",
  //     headers: {
  //       "cache-control": "no-cache",
  //     },
  //   },
  // );
}
