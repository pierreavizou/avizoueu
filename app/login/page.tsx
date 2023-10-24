"use client";
// import { Database } from "@/types/schema.gen";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { MyAuth } from "@/components/ui/LoginForm";

const User = () => {
  const u = Auth.useUser();
  const router = useRouter();
  // console.log("u", u);
  if (u.session) {
    router.replace(`${process.env.NEXT_PUBLIC_FRONT_URL}/admin/createImgUrl`);
  }
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
