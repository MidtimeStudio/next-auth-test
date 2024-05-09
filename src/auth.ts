import NextAuth from "next-auth"
import gitHub from "next-auth/providers/github"
 
export const { handlers: {GET, POST}, auth } = NextAuth({
  providers: [gitHub]
})