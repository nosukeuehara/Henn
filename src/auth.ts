import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { createClient } from "./utils/supabase/client"

const supabase = createClient()

export const config: NextAuthConfig = {
  providers: [Google],
  basePath: "/api/auth", // apiのパス
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),

}
export const { handlers, auth, signIn, signOut } = NextAuth(config)
