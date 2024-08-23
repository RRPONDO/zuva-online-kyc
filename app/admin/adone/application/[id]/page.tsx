import TableData from "@/app/admin/_components/TableData";
import UpdateForm from "@/app/admin/_components/UpdateForm";
// import { updtApplication } from "@/lib/actions/application";
import prisma from "@/lib/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Button,
//   Select,
//   SelectItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
//   Textarea,
// } from "@nextui-org/react";
import { ArrowBigLeft, FileText, SquarePlus } from "lucide-react";
import { register } from "module";
import Link from "next/link";
import { notFound } from "next/navigation";
import router from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

interface Props {
  params: {
    id: string;
  };
}

// const FormSchema = z.object({
//   status: z.string().min(1, "Please select decision"),
//   comment: z.string().min(1, "Please select decision"),
// });

// export type UpdateInputType = z.infer<typeof FormSchema>;

//updtApplication

const ApplicationPage = async ({ params }: Props) => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   control,
  //   formState: { errors, isSubmitting },
  // } = useForm<UpdateInputType>({
  //   resolver: zodResolver(FormSchema),
  // });

  const application = await prisma.application.findUnique({
    where: {
      id: +params.id,
    },
    include: {
      files: true,
    },
  });

  if (!application) return notFound();

  const appId = application.id;

  // const updateApplication: SubmitHandler<UpdateInputType> = async (data) => {
  //   console.log({ data });

  //   try {
  //     await updtApplication(appId, data);
  //     toast.success("Decision submitted");
  //     router.push("/admin/adone");
  //     //redirect("/home");
  //   } catch (error) {
  //     console.error({ error });
  //   }
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-3 bg-green-300 flex place-content-between p-4">
        <div className="">Accept of Reject Application:</div>
        <Link href={"/admin/adone"}>
          <div className="flex">
            <ArrowBigLeft />
            Back to Applications:
          </div>
        </Link>
      </div>

      <div className="col-span-3">
        <TableData application={application} />
      </div>

      <div className="col-span-3 border border-dashed border-green-400 m-5">
        <p>Accept or Reject</p>
        {/* <div><UpdateForm params={appId} /></div> */}
      </div>
    </div>
  );
};

export default ApplicationPage;
