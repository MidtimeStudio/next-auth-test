import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'email is required, pls type again!!!!!!'
    }),
    password: z.string().min(1, {
        message: "password is required... it means that u're wrong!!!!"
    })
})