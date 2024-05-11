import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);
                //if validatedFields is success
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email);
                    //if validatedFields is not success
                    if (!user || !user.password) return null;
                    //if password is matched
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user
                }
                return null;
            }
        })
    ]
} satisfies NextAuthConfig