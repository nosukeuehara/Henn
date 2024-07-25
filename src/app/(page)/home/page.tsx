import React from "react";
import { supabase } from "@/db";

const page = async () => {
  const { data: posts, error } = await supabase.from("posts-db").select("*");
  if (posts === null) return "no posts";
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <div>
              <p>{item.created_at}</p>
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
