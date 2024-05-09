import * as z from 'zod'

//login required
export const LoginSchema = z.object({
    email: z.string().email({
        message: 'email is required, IDIOT'
    }),
    password: z.string().min(1, {
        message: "password is required, IDIOT"
    })
})

//register required
export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'email is required, IDIOT'
    }),
    password: z.string().min(6, {
        message: "password's minimum 6 chracters required, IDIOT"
    }),
    name: z.string().min(1, {
        message: 'dont know spell ur name is it????'
    })
})