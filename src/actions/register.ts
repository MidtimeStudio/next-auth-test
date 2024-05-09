'use server'
import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    //if login invalid
    if (!validatedFields.success) {
        return { error: 'Invalid, bitch!' }
    }
    //unique
    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email)
    //existing user
    if (existingUser) {
        return { error: 'Email already in use, mdfk' }
    }
    //create user
    await db.user.create({
        data: { name, email, password: hashedPassword }
    })
    //if login success
    return { success: 'a bitch created!' }
}