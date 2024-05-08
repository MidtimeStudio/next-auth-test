'use client'
import CardWrapper from "./card-wrapper"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { LoginSchema } from "@/schemas"
import * as z from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FormError from "./ui/form-error"
import FormSuccess from "./ui/form-success"

export default function LoginForm () {
    const form = useForm <z.infer<typeof LoginSchema>>({
     resolver: zodResolver(LoginSchema),
     defaultValues: {
         email: '',
         password: ''
     }
    })
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values)
    }
     return (
         <CardWrapper headerLabel="Welcome bitch!" backButtonHref="/auth/register" backButtonLabel="Don't have an account????" showSocial>
             <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name='email' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type='email' placeholder='type ur email, bitch!!!!!!!!!!!!!!!!!'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                        <FormField control={form.control} name='password' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} type='password' placeholder='bitch, pls dont forget ur password!!!!!'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                    </div>
                    <FormSuccess message="OMG DO U KNOW?????"/>
                    <FormError message="u're fucking IDIOT!!!!"/>
                    <Button type="submit" className="w-full">Login!!!!!!</Button>
                 </form>
             </Form>
         </CardWrapper>
     )
 }