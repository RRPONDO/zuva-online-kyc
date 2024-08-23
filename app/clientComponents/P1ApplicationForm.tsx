import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { Input } from "@nextui-org/react";
import React from "react";

const P1ApplicationForm = () => {
  return (
    <form>
      <Input
        type="text"
        label="Company Name"
        className="col-span-2"
        startContent={<EnvelopeIcon className="w-4" />}
      />
    </form>
  );
};

export default P1ApplicationForm;
