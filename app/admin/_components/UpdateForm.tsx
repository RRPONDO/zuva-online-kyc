import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { SquarePlus } from "lucide-react";
import { register } from "module";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
//import { updtApplication } from "@/lib/actions/application";
import { toast } from "react-toastify";
import router from "next/router";

interface Props {
  params: {
    id: number;
  };
}

const FormSchema = z.object({
  status: z.string().min(1, "Please select decision"),
  comment: z.string().min(1, "Please select decision"),
});

export type UpdateInputType = z.infer<typeof FormSchema>;

const UpdateForm = async ({ params }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UpdateInputType>({
    resolver: zodResolver(FormSchema),
  });

  // const updateApplication: SubmitHandler<UpdateInputType> = async (data) => {
  //   console.log({ data });

  //   try {
  //     await updtApplication(params.id, data);
  //     toast.success("Decision submitted");
  //     router.push("/admin/adone");
  //     //redirect("/home");
  //   } catch (error) {
  //     console.error({ error });
  //   }
  // };

  return (
    <div>
      <form
      // onSubmit={handleSubmit(updateApplication, (errors) =>
      //   console.log({ errors })
      // )}
      >
        <Select
          errorMessage={errors.status?.message}
          isInvalid={!!errors.status}
          {...register("status")}
          label="Approve or Reject Application"
          selectionMode="single"
          // className="col-span-1"
        >
          <SelectItem key="Approve" value="Approve">
            Approve
          </SelectItem>
          <SelectItem key="Reject" value="Reject">
            Reject
          </SelectItem>
        </Select>

        <Textarea
          errorMessage={errors.comment?.message}
          isInvalid={!!errors.comment}
          {...register("comment")}
          label="Comment"
          placeholder="Enter your comment for the decision"
          className="max-w-xs"
        />

        <Button
          type="submit"
          className="bg-success"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          <SquarePlus />
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
