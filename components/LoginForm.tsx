import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const supabase = createClientComponentClient();

export const MyAuth = () => {
  return (
    <div className="my-auto w-full rounded-md bg-slate-900 p-8 lg:w-2/3 xl:w-1/4">
      <span className="mb-4 inline-block text-sm">
        <Link href="/">
          <ArrowLeft className="inline-block" />{" "}
          <span className="align-middle">Go back</span>
        </Link>
      </span>
      <p className="supabase-auth-ui_ui-label c-bpexlo">
        Log in using the credentials you received separately. <br />
        Only existing customers can log in.
      </p>
      <Auth
        redirectTo={`${process.env.NEXT_PUBLIC_FRONT_URL}/admin/createImgUrl`}
        supabaseClient={supabase}
        magicLink={true}
        otpType="email"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={true}
        providers={[]}
        localization={{
          variables: {
            sign_in: {
              email_input_placeholder: "name@company.com",
              password_input_placeholder:
                "your strong and complicated password",
            },
            sign_up: {
              link_text: "",
            },
          },
        }}
      />
    </div>
  );
};
