"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FileText } from "lucide-react";
import { Prisma, Application } from "@prisma/client";

type Props = {
  application: Prisma.ApplicationGetPayload<{
    include: {
      files: true;
    };
  }>;
};

const TableData = ({ application }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1">
        <div className="flex place-content-between p-3 bg-grey-300 text-xl font-bold">
          <div>{application.counterparty} Information:</div>
          <div>{application.entityType}</div>
        </div>
        <div>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>KEY</TableColumn>
              <TableColumn>VALUE</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Registered Name</TableCell>
                <TableCell>{application.regName}</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Registered Country</TableCell>
                <TableCell>{application.regCountry}</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Registration ID</TableCell>
                <TableCell>{application.regId}</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Registered Address</TableCell>
                <TableCell>{application.regAddr}</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>Business Address</TableCell>
                <TableCell>{application.bsnsAddr}</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>Telephone</TableCell>
                <TableCell>{application.telephone}</TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>Website</TableCell>
                <TableCell>{application.website}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex place-content-center p-3 bg-grey-300 text-xl font-bold">
          <div>Banking Information:</div>
        </div>
        <div>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>KEY</TableColumn>
              <TableColumn>VALUE</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Bank Name</TableCell>
                <TableCell>{application.bankName}</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Bank Address</TableCell>
                <TableCell>{application.bankAddr}</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Country</TableCell>
                <TableCell>{application.country}</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Account Number</TableCell>
                <TableCell>{application.accNum}</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>Swift Code</TableCell>
                <TableCell>{application.swiftCode}</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>IBAN</TableCell>
                <TableCell>{application.iban}</TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>Account Beneficiary</TableCell>
                <TableCell>{application.accBen}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex place-content-between p-3 bg-grey-300 text-xl font-bold">
          <div>View uploaded files:</div>
        </div>
        <div className="m-4">
          {application.files.map((item) => (
            <a target="_blank" href={item.url}>
              <FileText />
              <span>View File</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableData;
