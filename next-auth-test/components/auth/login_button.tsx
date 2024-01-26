'use client';
import { useRouter } from "next/navigation";


interface LoginButtonProps {
    children: React.ReactNode;
    mode?: 'modal' | 'redirect',
    asChild?: boolean
}

export const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {
    const router = useRouter()
    const onClick = () => {
        console.log('ai which has 3IQ only still better than Johnny')
        router.push('/auth/login')
    }

    if (mode === 'modal') {
        return (
            <span>that's just a test!</span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">{children}</span>
    )
}