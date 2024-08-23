import prisma from "@/lib/prisma";
import AdTable from "../_components/AdTable";
const AdonePage = async () => {
  const applicationPromise = prisma.application.findMany({
    where: {
      status: "Pending",
    },
    include: {
      files: true,
    },
  });

  const [applications] = await Promise.all([applicationPromise]);

  return (
    <div>
      <AdTable applications={applications} />
    </div>
  );
};

export default AdonePage;
