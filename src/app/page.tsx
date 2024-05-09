import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginButton } from "./components/auth/login-button";

export default function Home() {
  console.log('幹你娘')
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold drop-shadow-md">Next-Auth</h1>
        <span className="text-gray-600">That{"'"}s a next-auth test</span>
      </div>
      <LoginButton asChild>
      <Button className="rounded-sm mt-5 text-sm" variant={'outline'}>Sign in</Button>
      </LoginButton>
    </main>
  );
}
