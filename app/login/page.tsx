"use client";
// import { Database } from "@/types/schema.gen";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";

const User = () => {
  const u = Auth.useUser();
  const router = useRouter();
  // console.log("u", u);
  if (u.session) {
    router.push("http://localhost:3000/admin/createImgUrl");
  }
  return <></>;
};

const supabase = createClientComponentClient();

export const MyAuth = () => {
  return (
    <div className="my-auto w-full rounded-md bg-slate-900 p-8 lg:w-1/3 xl:w-1/4">
      <Auth
        redirectTo="http://localhost:3000/admin/createImgUrl"
        supabaseClient={supabase}
        magicLink={true}
        otpType="email"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={true}
        providers={[]}
      />
    </div>
  );
};

export default function Login() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <User />
      <MyAuth />
    </Auth.UserContextProvider>
  );
}
