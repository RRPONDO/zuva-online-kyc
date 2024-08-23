import SigninForm from "@/app/components/SigninForm";
import Link from "next/link";
import React from "react";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const SigninPage = ({ searchParams }: Props) => {
  console.log({ searchParams });
  return (
    <div className="flex items-center justify-center flex-col">
      <SigninForm callbackUrl={searchParams.callbackUrl} />
      <Link href={"/auth/forgotPassword"}>Forgot Your Password</Link>
    </div>
  );
};

export default SigninPage;
