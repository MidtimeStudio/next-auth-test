'use client'
import CardWrapper from "./card-wrapper"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RegisterSchema } from "@/schemas"
import * as z from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FormError from "../ui/form-error"
import FormSuccess from "../ui/form-success"
import { register } from "@/actions/register"
import { useTransition, useState } from "react"

export default function RegisterForm () {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const form = useForm <z.infer<typeof RegisterSchema>>({
     resolver: zodResolver (RegisterSchema),
     defaultValues: {
         email: '',
         password: '',
         name: ''
     }
    })
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError('')
        setSuccess('')
        startTransition(() => {
            register(values).then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }
     return (
         <CardWrapper headerLabel="create ur account bitch!" backButtonHref="/auth/login" backButtonLabel="u have ur account than just now clicked me for wat????" showSocial>
             <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name='name' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input disabled={isPending} {...field} type='name' placeholder='type ur email, bitch!!!!!!!!!!!!!!!!!'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                        <FormField control={form.control} name='email' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input disabled={isPending} {...field} type='email' placeholder='type ur email, bitch!!!!!!!!!!!!!!!!!'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                        <FormField control={form.control} name='password' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input disabled={isPending} {...field} type='password' placeholder='bitch, pls dont forget ur password!!!!!'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                    </div>
                    <FormSuccess message={success}/>
                    <FormError message={error}/>
                    <Button disabled={isPending} type="submit" className="w-full">Register!!!!!!</Button>
                 </form>
             </Form>
         </CardWrapper>
     )
 }