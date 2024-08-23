import SignUpForm from "@/app/components/SignUpForm";
import { Image, Link } from "@nextui-org/react";
import React from "react";

const SignupPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center gap-3">
      <div className="md:col-span-2 flex justify-center items-center">
        <p>Already Signed up?</p>
        <Link href={"/auth/signin"}>Sign In</Link>
      </div>
      <SignUpForm />
      <Image src="/login.png" alt="login Form" width={300} height={300} />
    </div>
  );
};

export default SignupPage;
