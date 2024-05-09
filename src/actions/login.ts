'use server'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    //if login invalid
    if (!validatedFields.success) {
        return { error: 'Invalid, bitch!' }
    }
    //if login success
    return { success: 'check ur email, bitch!' }
}