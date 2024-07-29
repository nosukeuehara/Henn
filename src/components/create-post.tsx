import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignIn } from "./signIn";
import { auth } from "@/auth";

const CreatePost = async () => {
  return (
    <Button asChild>
      <Link href={"/post/new"}>Click here</Link>
    </Button>
  );
};

export default CreatePost;
