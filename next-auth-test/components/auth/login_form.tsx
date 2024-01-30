'use client'
import { Button, TextInput, PasswordInput } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css'
import { CardWrapper } from "./card_wrapper"
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';


export const LoginForm = () => {
  //const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email!'),
      password: (value_1) => (/^\S+@\S+$/.test(value_1) ? null : 'Invalid password!'),
    },
  });
  return (
    <div >
      <MantineProvider>

      <CardWrapper headerLabel="Welcome to the page!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
        
        <form className='' onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput label='Email' placeholder="Email" withAsterisk leftSection={<IconAt size={16} />} {...form.getInputProps('email')} radius='md' />
        </form>
        <form onSubmit={form.onSubmit((value_1) => console.log(value_1))}>
          <PasswordInput label="Password" radius='md' withAsterisk placeholder='Password' {...form.getInputProps('password')}/>
          <Button variant="light" mt='md' type="submit" fullWidth>Submit</Button>
        </form>
        

       
      </CardWrapper>
      </MantineProvider>
    </div>
  )
}

export default LoginForm