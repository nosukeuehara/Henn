import { SignIn } from "@/app/components/SignIn";
import { supabase } from "@/db";

export default async function Home() {
  let { data, error } = await supabase.from("posts-db").select("*");

  return (
    <div>
      <div>Hello</div>
      <SignIn />
      <div>
        {data?.map((itme) => {
          return (
            <div key={itme.id}>
              <h1>{itme.title}</h1>
              <p>{itme.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
