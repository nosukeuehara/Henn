import NextAuth, { NextAuthConfig } from "next-auth"
import google from "next-auth/providers/google"

export const config: NextAuthConfig = {
  providers: [google],
  basePath: "/api/auth", // apiのパス
}


export const { handlers, auth, signIn, signOut } = NextAuth(config)