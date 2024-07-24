import { SignOut } from "@/app/components/signOut";
import { auth } from "@/auth";
import React from "react";
import Image from "next/image";

const page = async () => {
  const session = await auth();
  if (session === null) return "";
  return (
    <div>
      <SignOut />
      {session!.user!.name}
      <Image
        src={session!.user!.image!}
        width={20}
        height={20}
        alt={session!.user!.name!}
      />
    </div>
  );
};

export default page;
