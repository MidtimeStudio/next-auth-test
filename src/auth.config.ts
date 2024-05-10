import gitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {providers: [gitHub]} satisfies NextAuthConfig