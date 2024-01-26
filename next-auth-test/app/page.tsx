'use client';
import { LoginButton } from "@/components/auth/login_button";
import { MantineProvider, createTheme, Button } from "@mantine/core";
import '@mantine/core/styles.css'

export default function Home() {
  const theme = createTheme({
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
      'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    },
    //
  });
  console.log('ai which has 3IQ still better than Johnny')
  return (
    <MantineProvider theme={theme}>
      <main className="flex h-full flex-col items-center justify-center bg-slate-300">
        <div className="space-y-4 text-center">
          <h1 className="font-bold">next auth login</h1>
          <p>this is a simple auth page</p>
          <div>
            <LoginButton >
              <Button colors='ocean-blue' size="md" >Sign in</Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </MantineProvider>

  )
}
