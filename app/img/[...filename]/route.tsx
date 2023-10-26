/* eslint-disable @next/next/no-img-element */
import { NextRequest } from "next/server";
import logAccess from "@/lib/server/logFileAccess";

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string[] } },
) {
  const filename = params.filename.join("/");
  console.log("filename", filename);

  await logAccess(req, filename);

  try {
    const img = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${filename}`,
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
