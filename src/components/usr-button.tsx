import { auth } from "@/auth";
import React from "react";
import { SignIn } from "./signIn";
import { Avatar, AvatarImage } from "./ui/avatar";

const UserButton = async () => {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  const user = session.user;
  const avatarIdentity = {
    name: user.name!,
    email: user.email!,
  };
  const avatarSize = { width: 40, height: 40 };
  return (
    <div>
      <Avatar avatarIdentity={avatarIdentity} />
      <AvatarImage
        avatarImage={user.image!}
        avatarAlt={user.name!}
        avatarSize={avatarSize}
      ></AvatarImage>
    </div>
  );
};

export default UserButton;
