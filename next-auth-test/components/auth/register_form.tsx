'use client'
import { Button, TextInput, PasswordInput, rem } from "@mantine/core"
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
import { register } from "@/actions/register"
import { useState, useTransition } from "react"

export const RegisterForm = () => {
  const [registerError, setRegisterError] = useState<string | undefined>(undefined);
  const [registerSuccess, setRegisterSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition()
  const handleRegister = async (values: any) => {
    try {
      // Perform your login logic here
      // Example: const loginResult = await login(values);
      // Assuming login function returns a success message on successful login
//
      // Simulating login success
      setRegisterSuccess('Signup successful!');
      setRegisterError(undefined); // Set to undefined instead of null
    } catch (error) {
      // Handle login error
      // Example: setLoginError('Invalid credentials');
      setRegisterError('Check your form and try again!');
      setRegisterSuccess(undefined); // Set to undefined instead of null
    } finally {
      // End transition regardless of success or error
      startTransition(() => {
        register(values)
      });
    }
  };
  const schema = z.object({
    name: z.string().min(1, { message: 'Name is required!' }),
    email: z.string().email({ message: 'Email is required!' }),
    password: z.string().min(6, { message: 'Minimum 6 characters required!' })
  })
  //const [visible, { toggle }] = useDisclosure(false);
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  const form = useForm({
    initialValues: {
      name: '',
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
        <CardWrapper headerLabel="Welcome to the page!" backButtonLabel="Already have an account?" backButtonHref="/auth/login" showSocial>
          <form onSubmit={form.onSubmit(handleRegister)}>
            <TextInput label='Name' placeholder='Type your name' radius='md' disabled={isPending} mt='sm' withAsterisk {...form.getInputProps('name')}/>
            <TextInput disabled={isPending} mt='sm' label='Email' placeholder="Type your email" withAsterisk leftSection={<IconAt size={16} />} {...form.getInputProps('email')} radius='md' />
            <PasswordInput disabled={isPending} mt='sm' label="Password" radius='md' withAsterisk placeholder='Type your password' leftSection={icon} {...form.getInputProps('password')} />
            <FormError message={registerError}/>
            <FormSuccess message={registerSuccess}/>
            <Button disabled={isPending} variant="light" mt='md' type="submit" fullWidth>Submit</Button>
          </form>
        </CardWrapper>
      </MantineProvider>
    </div>
  )
}

export default RegisterForm