import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { ipAddress } from "@vercel/functions";
import { createClient } from "@supabase/supabase-js";
import { getFrontUrl } from "../utils";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_KEY ?? "",
);

export default async function logAccess(req: NextRequest, filename: string) {
  if (
    typeof req.nextUrl === "undefined" ||
    req.nextUrl.searchParams.has("nolog")
  ) {
    console.log("Not logging access to", filename);
    return;
  }
  const headersList = await headers();

  let ip = ipAddress(req) ?? headersList.get("x-real-ip");
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

  // const filename = params.filename.join("/");
  const fullFilename = new URL(filename, getFrontUrl());

  try {
    const { error } = await supabase.from("access_logs").insert({
      ip,
      userAgent,
      acceptLanguage,
      geo,
      filename: fullFilename,
      queryString,
      parsedQueryString,
      metadata,
    });
    if (error) console.error("Could not save data to Supabase", error);
    else console.log("Logged access to", filename);
  } catch (e) {
    console.error("Could not communicate with Supabase", e);
  }
}
