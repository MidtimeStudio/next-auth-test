'use client'
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css'
import { CardWrapper } from "./card_wrapper"

export const LoginForm = () => {
  return (
    <div>
      <CardWrapper headerLabel="Welcome to the page!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
        <Text size="sm" c="dimmed" >
          login form
        </Text>
      </CardWrapper>
    </div>
  )
}

export default LoginForm