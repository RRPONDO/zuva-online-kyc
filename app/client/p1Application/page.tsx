"use client";
import P1ApplicationForm from "@/app/clientComponents/P1ApplicationForm";
import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { FileText, Info, Pencil, Plus, SquarePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
//import router from "next/router";
import Applicationfiles from "./_components/Applicationfiles";
import { unknown, z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { uploadFile } from "@/lib/upload";
import { savApplication } from "@/lib/actions/application";
import { toast } from "react-toastify";

interface Props {}

const FormSchema = z.object({
  counterparty: z.string().min(1, "Please select counterparty"),
  entityType: z.string().min(1, "Please select entity type"),

  regName: z.string().min(1, "Please Enter The Reg Number"),
  regId: z.string().min(1, "Please Enter The Name"),
  // regDate: z.string().date(),
  regCountry: z.string().min(1, "Please Enter Regstered Country"),
  regAddr: z.string().min(1, "Please Enter the Registered address"),
  bsnsAddr: z.string().min(1, "Please Enter business address"),
  telephone: z.string().min(1, "Please Enter the telephone"),
  website: z.string().min(1, "Please Enter the website"),

  bankName: z.string().min(1, "Please Enter the bank name"),
  bankAddr: z.string().min(1, "Please Enter the bank address"),
  country: z.string().min(1, "Please Enter country"),
  accNum: z.string().min(1, "Please Enter account number"),
  swiftCode: z.string().min(1, "Please Enter swift code"),
  iban: z.string().min(1, "Please Enter iban"),
  accBen: z.string().min(1, "Please Enter the account beneficiary"),
});

export type InputType = z.infer<typeof FormSchema>;

const P1Application = () => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/Client/P1Application");
    },
  });

  const userId = session?.user.id;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const [images, setImages] = useState<File[]>([]);

  const [step, setStep] = useState(0);

  const saveApplication: SubmitHandler<InputType> = async (data) => {
    console.log({ data });
    const imageUrls = await uploadFile(images);
    console.log({ imageUrls });

    try {
      await savApplication(data, imageUrls, userId!);
      toast.success("Application submitted");
      router.push("/home");
      //redirect("/home");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(saveApplication, (errors) =>
          console.log({ errors })
        )}
      >
        <div className="flex flex-col">
          <div className="border">
            <h2 className="text-center p-4 text-2xl">
              Complete the form below
            </h2>
          </div>
          <div className="bg-green-200 grid grid-cols-2">
            <div className="col-span-1 p-2">
              <h2 className="text-center p-2 text-lg font-bold">
                Customer / Supplier Information:
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <Select
                  errorMessage={errors.counterparty?.message}
                  isInvalid={!!errors.counterparty}
                  {...register("counterparty")}
                  label="Select Counterparty"
                  selectionMode="single"
                  className="col-span-2"
                >
                  <SelectItem key="Supplier" value="Supplier">
                    Supplier
                  </SelectItem>
                  <SelectItem key="Customer" value="Customer">
                    Customer
                  </SelectItem>
                </Select>

                <Select
                  errorMessage={errors.entityType?.message}
                  isInvalid={!!errors.entityType}
                  {...register("entityType")}
                  label="Select Entity Type"
                  selectionMode="single"
                  className="col-span-2"
                >
                  <SelectItem
                    key="Private Limited Company"
                    value="Private Limited Company"
                  >
                    Private Limited Company
                  </SelectItem>
                  <SelectItem
                    key="Public Limited Company"
                    value="Public Limited Company"
                  >
                    Public Limited Company
                  </SelectItem>
                  <SelectItem key="Partnership" value="Partnership">
                    Partnership
                  </SelectItem>

                  <SelectItem key="Parastatal" value="Parastatal">
                    Parastatal
                  </SelectItem>

                  <SelectItem key="Individual" value="Individual">
                    Individual
                  </SelectItem>
                </Select>

                <Input
                  errorMessage={errors.regName?.message}
                  isInvalid={!!errors.regName}
                  {...register("regName")}
                  label="Registered Name"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.regId?.message}
                  isInvalid={!!errors.regId}
                  {...register("regId")}
                  label="Registration ID"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.telephone?.message}
                  isInvalid={!!errors.telephone}
                  {...register("telephone")}
                  label="Telephone Number"
                  type="text"
                  size="sm"
                  className="col-span-1"
                />
                {/* <Controller
                  control={control}
                  name="regDate"
                  render={({ field }) => (
                    <DatePicker
                      onChange={(date) => {
                        if (date) {
                          const formattedDate = `${date.year}-${date.month}-${date.day}`; // Adjust based on DatePicker's structure
                          field.onChange(formattedDate);
                        } else {
                          field.onChange("");
                        }
                      }}
                      onBlur={field.onBlur}
                      label="Registered Date"
                      className="min-w-[284px]"
                    />
                  )}
                /> */}

                <Input
                  errorMessage={errors.regCountry?.message}
                  isInvalid={!!errors.regCountry}
                  {...register("regCountry")}
                  label="Registred Country"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.regAddr?.message}
                  isInvalid={!!errors.regAddr}
                  {...register("regAddr")}
                  label="Registred Address"
                  type="text"
                  size="sm"
                  className="col-span-2"
                />

                <Input
                  errorMessage={errors.bsnsAddr?.message}
                  isInvalid={!!errors.bsnsAddr}
                  {...register("bsnsAddr")}
                  label="Business Address"
                  type="text"
                  size="sm"
                  className="col-span-2"
                />

                <Input
                  errorMessage={errors.website?.message}
                  isInvalid={!!errors.website}
                  {...register("website")}
                  label="Website Address"
                  type="text"
                  size="sm"
                  className="col-span-2"
                />
              </div>
            </div>
            <div className="col-span-1 p-2">
              <h2 className="text-center p-2 text-lg font-bold">
                Bank Information:
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  errorMessage={errors.bankName?.message}
                  isInvalid={!!errors.bankName}
                  {...register("bankName")}
                  label="Bank Name"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.country?.message}
                  isInvalid={!!errors.country}
                  {...register("country")}
                  label="Country"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.bankAddr?.message}
                  isInvalid={!!errors.bankAddr}
                  {...register("bankAddr")}
                  label="Bank Address"
                  type="text"
                  size="sm"
                  className="col-span-2"
                />
                <Input
                  errorMessage={errors.accNum?.message}
                  isInvalid={!!errors.accNum}
                  {...register("accNum")}
                  label="Account Number"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.swiftCode?.message}
                  isInvalid={!!errors.swiftCode}
                  {...register("swiftCode")}
                  label="Swift Code"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.iban?.message}
                  isInvalid={!!errors.iban}
                  {...register("iban")}
                  label="IBAN"
                  type="text"
                  size="sm"
                  className=""
                />
                <Input
                  errorMessage={errors.accBen?.message}
                  isInvalid={!!errors.accBen}
                  {...register("accBen")}
                  label="Account Beneficiary"
                  type="text"
                  size="sm"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col ml-4">
              <p className="text-sm text-red-600 mt-5">
                **Combine all organisation files into a single document or
                upload them separately*
              </p>

              <a target="_blank" href="/terms">
                <div className="flex ml-11 mt-3 mb-3 text-xs text-blue-400 place-items-center gap-2">
                  <Info />
                  Check Required Documents for each entity type:
                </div>
              </a>

              <Applicationfiles images={images} setImages={setImages} />
            </div>
          </div>

          <div className="rounded-box py-4 px-4 place-items-center">
            <Button
              type="submit"
              className="bg-success"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              <SquarePlus />
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default P1Application;
