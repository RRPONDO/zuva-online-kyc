"use client";
import { forgotPassword } from "@/lib/actions/authActions";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Image } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type InputType = z.infer<typeof FormSchema>;

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const submitRequest: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await forgotPassword(data.email);
      if (result!) toast.success("Reset password link was sent to your email.");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <form
        onSubmit={handleSubmit(submitRequest)}
        className="flex flex-col gap-2 p-2 border rounded-md shadow"
      >
        <div className="text-center p-2">Enter Your Email</div>
        <Input
          label="Email"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
          errorMessage={errors.email?.message}
        />
        <Button
          isLoading={isSubmitting}
          type="submit"
          disabled={isSubmitting}
          color="primary"
        >
          {isSubmitting ? "Please Wait..." : "Submit"}
        </Button>
      </form>
      <Image
        src={"/forgotPass.png"}
        width={500}
        height={500}
        alt="Forgot Pass.jpg"
        className="place-self-center"
      />
    </div>
  );
};

export default ForgotPasswordPage;
