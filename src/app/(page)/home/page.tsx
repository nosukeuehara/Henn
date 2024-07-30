import { auth } from "@/auth";
import SessionData from "@/components/test";
import { createClient } from "@/utils/supabase/client";

const page = async () => {
  const supabase = await createClient();
  let { data, error } = await supabase.from("posts-db").select("*");
  const session = await auth();
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
      <SessionData session={session} />
    </div>
  );
};

export default page;
