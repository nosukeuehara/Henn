import { signOut } from "@/auth";

export function SignOut({ provider, ...props }: { provider?: string }) {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button>ログアウト</button>
    </form>
  );
}
