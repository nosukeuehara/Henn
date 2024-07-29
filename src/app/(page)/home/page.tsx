import { createClient } from "@/utils/supabase/client";

const page = async () => {
  const supabase = createClient();
  let { data, error } = await supabase.from("posts-db").select("*");
  console.log(data);
  return (
    <div>
      {data?.map((d) => {
        return (
          <div key={d.id}>
            <div>{d.title}</div>
            <div>{d.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
