import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT, publicRoutes } from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}