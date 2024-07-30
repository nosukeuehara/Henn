import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Github from "next-auth/providers/github"
export type {
  Account,
  DefaultSession,
  Profile,
  Session,
  User,
} from "@auth/core/types"

export const config: NextAuthConfig = {
  providers: [Google, Github],
  basePath: "/api/auth", // apiのパス
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  })
}
export const { handlers, auth, signIn, signOut } = NextAuth(config)
