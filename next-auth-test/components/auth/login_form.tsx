'use client'
import { Button, TextInput, PasswordInput, rem, Alert } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css'
import { CardWrapper } from "./card_wrapper"
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
//import { useDisclosure } from '@mantine/hooks';
import { IconLock } from '@tabler/icons-react';
//import { useForm } from 'react-hook-form'
//import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
//import { LoginSchema } from "@/schemas"
import { zodResolver } from 'mantine-form-zod-resolver';
import { FormError } from "@/components/form_error"
import { FormSuccess } from "@/components/form_success"
import { login } from "@/actions/login"
import { useState, useTransition } from "react"

export const LoginForm = () => {
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [loginSuccess, setLoginSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition()
  const handleLogin = async (values: any) => {
    try {
      // Perform your login logic here
      // Example: const loginResult = await login(values);
      // Assuming login function returns a success message on successful login
//
      // Simulating login success
      setLoginSuccess('Email sent!');
      setLoginError(undefined); // Set to undefined instead of null
    } catch (error) {
      // Handle login error
      // Example: setLoginError('Invalid credentials');
      setLoginError('Invalid credentials');
      setLoginSuccess(undefined); // Set to undefined instead of null
    } finally {
      // End transition regardless of success or error
      startTransition(() => {
        login(values)
      });
    }
  };
  const schema = z.object({
    email: z.string().email({ message: 'Email is required!' }),
    password: z.string().min(1, { message: 'Password is required!' })
  })
  //const [visible, { toggle }] = useDisclosure(false);
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  const form = useForm({
    initialValues: {
      email: '',
      //termsOfService: false,
      password: ''
    },
    validate: zodResolver(schema),
    /*initialErrors: {
      //name: <p>Paragraph error</p>, // -> error as a react element
      //email: 'Invalid email!', // -> error as a number
      email: null
    },*/
    /*validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email!'),
      password: (value) => (/^\S+@\S+$/.test(value) ? null : 'iiii'),
    },*/
  });
  return (
    <div >
      <MantineProvider>
        <CardWrapper headerLabel="Welcome to the page!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
          <form onSubmit={form.onSubmit(handleLogin)}>
            <TextInput disabled={isPending} label='Email' placeholder="Type your email" withAsterisk leftSection={<IconAt size={16} />} {...form.getInputProps('email')} radius='md' />
            <PasswordInput disabled={isPending} mt='sm' label="Password" radius='md' withAsterisk placeholder='Type your password' leftSection={icon} {...form.getInputProps('password')} />
            {<FormError message={loginError}/>}
            {<FormSuccess message={loginSuccess}/>}
            <Button disabled={isPending} variant="light" mt='md' type="submit" fullWidth>Submit</Button>
          </form>
        </CardWrapper>
      </MantineProvider>
    </div>
  )
}

export default LoginForm
  
  
