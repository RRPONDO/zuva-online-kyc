import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div>
      <Image
        height={300}
        width={300}
        src={user?.email ?? ""}
        alt={user?.email ?? ""}
        className="rounded-full"
      />

      <div className="grid grid-cols-4 gap-y-4">
        <p>Email:</p>
        <p className="col-span-3">{user?.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
