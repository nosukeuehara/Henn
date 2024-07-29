import { Button } from "@/components/ui/button";

import React from "react";

const createPost = () => {
  async function createPost(formData: FormData) {
    "use server";

    const rawFormData = {
      title: formData.get("title"),
    };
  }

  return (
    <form
      action={createPost}
      className="flex flex-col justify-center items-center py-32"
    >
      <textarea
        defaultValue={"...title"}
        name="title"
        className=" border border-slate-400 w-72 h-36 mb-11"
      />
      <Button>create</Button>
    </form>
  );
};

export default createPost;
