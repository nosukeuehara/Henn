import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

export const config: NextAuthConfig = {
  providers: [Google],
  basePath: "/api/auth", // apiのパス
}
export const { handlers, auth, signIn, signOut } = NextAuth(config)
