/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { MyAuth } from "@/app/login/page";
import type { Session } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

function handleFormSubmit(formData: FormData) {
  const imgUrl = formData.get("imgUrl");
  formData.delete("imgUrl");

  let formDataObject: Record<string, unknown> = {};
  for (let [k, v] of formData.entries()) {
    formDataObject[k] = v || undefined;
  }
  const metadata = Buffer.from(JSON.stringify(formDataObject)).toString(
    "base64",
  );

  const qs = new URLSearchParams({
    emailSubject: formData.get("emailSubject") as string,
    metadata,
  });

  return `${imgUrl}?${qs}`;
}

export default function CreateImgUrl() {
  const defaultImg = "https://avizou.eu/img/Assets/sigp.png";
  const [finalUrl, setFinalUrl] = useState("");
  const [md, setMd] = useState("");
  const [html, setHtml] = useState("");
  const [imgUrl, setImgUrl] = useState(defaultImg);

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      // console.log("session", session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setMd(`![Image](${finalUrl})`);
    setHtml(`<img src="${finalUrl}" />`);
  }, [finalUrl]);

  if (!session) {
    return <MyAuth />;
  }

  return (
    <div className="flex w-full flex-col gap-4 md:w-2/3 lg:w-2/4">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          setImgUrl(formData.get("imgUrl") as string);
          const url = handleFormSubmit(formData);
          setFinalUrl(url);
        }}
      >
        <label htmlFor="imgUrl">
          Url de l'image{" "}
          <input
            required
            className="mt-1 block w-full rounded text-gray-800 shadow-md focus:ring-2 focus:ring-purple-700"
            type="text"
            name="imgUrl"
            defaultValue={defaultImg}
          />
        </label>

        <label htmlFor="recipientEmail">
          Email du destinataire
          <input
            required
            className="mt-1 block w-full rounded text-gray-800 shadow-md focus:ring-2 focus:ring-purple-700"
            type="email"
            name="recipientEmail"
            autoComplete="email"
          />
        </label>

        <label htmlFor="emailSubject">
          Objet de l'email
          <input
            required
            className="mt-1 block w-full rounded text-gray-800 shadow-md focus:ring-2 focus:ring-purple-700"
            type="text"
            name="emailSubject"
          />
        </label>

        <button
          type="submit"
          className="my-2 rounded bg-purple p-2 shadow-md transition-colors duration-300 hover:bg-purple-700"
        >
          Valider
        </button>
      </form>
      {finalUrl && (
        <>
          <p className="break-words">{finalUrl}</p>
          <hr />
          <p className="break-words font-mono">{md}</p>
          <hr />
          <p className="break-words font-mono">{html}</p>
          <hr />
          <img
            className="block h-auto max-h-32 w-auto max-w-lg self-center"
            src={imgUrl}
            alt=""
            // width={512}
            // height={128}
          />
        </>
      )}
    </div>
  );
}
