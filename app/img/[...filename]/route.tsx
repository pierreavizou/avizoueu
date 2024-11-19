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
}
