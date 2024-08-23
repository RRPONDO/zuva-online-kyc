import React from "react";
import NavigationForm from "../clientComponents/navigationLinks";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import OuterLayoutRouter from "next/dist/client/components/layout-router";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const application = await prisma.application.findUnique({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className="flex flex-col h-screen bg-lime-100 gap-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="border border-black-800 shadow-2xl bg-slate-200 col-span-1">
          <NavigationForm />
          <div className="m-2 mt-4 text-green-500">
            <p color="foreground">Application status:</p>
            <p className="text-xl font-bold text p-4">{application?.status}</p>
          </div>
        </div>
        <div className="border border-black-800 col-span-1 p-3 m-2">
          <div>
            <p className="text-xl font-bold text p-4">
              {application?.counterparty} Information:
            </p>
            <ul className="list-inside">
              <li className="border border-green-200 shadow-sm p-4">
                {application?.regName}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.entityType}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.regId}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.regCountry}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.regAddr}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.bsnsAddr}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                Telephone: {application?.telephone}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                Website: {application?.website}
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-black-800 col-span-1 p-3 m-2">
          <div>
            <p className="text-xl font-bold text p-4">Bank Information:</p>
            <ul className="list-inside">
              <li className="border border-green-200 shadow-sm p-4">
                {application?.bankName}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.bankAddr}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.country}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.accNum}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.swiftCode}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.iban}
              </li>
              <li className="border border-green-200 shadow-sm p-4">
                {application?.accBen}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-300">div 2</div>
    </div>
  );
};

export default HomePage;
