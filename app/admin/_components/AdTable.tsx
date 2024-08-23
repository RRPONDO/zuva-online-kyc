"use client";
import { EyeIcon } from "@heroicons/react/16/solid";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Prisma, Application } from "@prisma/client";
import Link from "next/link";
import UpdateForm from "./UpdateForm";

type Props = {
  applications: Prisma.ApplicationGetPayload<{
    include: {
      files: true;
    };
  }>[];
};

const AdTable = ({ applications }: Props) => {
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Reg Name</TableColumn>
          <TableColumn>Counterparty</TableColumn>
          <TableColumn>Entity Type</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {applications.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.regName}</TableCell>
              <TableCell>{item.counterparty}</TableCell>
              <TableCell>{item.entityType}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <div className="flex">
                  <Tooltip content="Details">
                    <Link href={`/admin/adone/application/${item.id}`}>
                      <EyeIcon className="w-5" />
                    </Link>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdTable;
