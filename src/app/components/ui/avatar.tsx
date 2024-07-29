import Image from "next/image";
import React from "react";

const Avatar = ({
  avatarIdentity,
}: {
  avatarIdentity: { name: string; email: string };
}) => {
  return (
    <div>
      <div>{avatarIdentity.email}</div>
      <div>{avatarIdentity.name}</div>
    </div>
  );
};

const AvatarImage = ({
  ...props
}: {
  avatarImage: string;
  avatarAlt: string;
  avatarSize: { width: number; height: number };
}) => {
  return (
    <Image
      src={props.avatarImage}
      alt={props.avatarAlt}
      width={props.avatarSize.width}
      height={props.avatarSize.height}
    />
  );
};

const AvaterFallback = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export { Avatar, AvatarImage, AvaterFallback };
