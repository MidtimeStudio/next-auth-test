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

export const LoginForm = () => {
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
          <form onSubmit={form.onSubmit((value) => console.log(value))}>
            <TextInput label='Email' placeholder="Email" withAsterisk leftSection={<IconAt size={16} />} {...form.getInputProps('email')} radius='md' />
            <PasswordInput mt='sm' label="Password" radius='md' withAsterisk placeholder='Password' leftSection={icon} {...form.getInputProps('password')} />
            {<FormError message="Something went wrong!"/>}
            {<FormSuccess message="Email sent!"/>}
            <Button variant="light" mt='md' type="submit" fullWidth>Submit</Button>
          </form>
        </CardWrapper>
      </MantineProvider>
    </div>
  )
}

export default LoginForm