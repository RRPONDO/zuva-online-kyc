import { Link } from "@nextui-org/react";
import React from "react";

const NavigationForm = () => {
  return (
    <div className="flex flex-col gap-2 m-2">
      <h2 className="font-bold text-xl">Complete registration</h2>
      <div className="flex flex-col ml-5 gap-2">
        <Link showAnchorIcon href="/client/p1Application" color="foreground">
          Complete application
        </Link>
      </div>
    </div>
  );
};

export default NavigationForm;
