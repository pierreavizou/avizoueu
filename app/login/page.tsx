"use client";
// import { Database } from "@/types/schema.gen";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { MyAuth } from "@/components/LoginForm";
import { getFrontUrl } from "@/lib/utils";
import { useEffect } from "react";

const User = () => {
  const u = Auth.useUser();
  const router = useRouter();
  // console.log("u", u);
  useEffect(() => {
    if (u.session) {
      router.replace(`${getFrontUrl()}/admin/createImgUrl`);
    }
  });
  return <></>;
};

const supabase = createClientComponentClient();

export default function Login() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <User />
      <MyAuth />
    </Auth.UserContextProvider>
  );
}
