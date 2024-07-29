import NextAuth, { NextAuthConfig } from "next-auth"
import google from "next-auth/providers/google"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 03a7609 (test)
export const config: NextAuthConfig = {
  providers: [google],
  basePath: "/api/auth", // apiのパス
}
<<<<<<< HEAD


export const { handlers, auth, signIn, signOut } = NextAuth(config)
=======
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  basePath: "/api/auth",

})
>>>>>>> 3578ec3 (supabaseのセットアップとauthの機能追加)
=======


export const { handlers, auth, signIn, signOut } = NextAuth(config)
>>>>>>> 03a7609 (test)
