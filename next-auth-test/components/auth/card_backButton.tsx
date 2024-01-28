'use client'
import { UnstyledButton, Button } from "@mantine/core"
import Link from "next/link";

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({href, label}: BackButtonProps) => {
    return (
        <UnstyledButton size="sm" className="text-center justify-center flex hover:underline hover:text-gray-500 ">
            <Link href={href}>{label}</Link>
        </UnstyledButton>
    )
}

export default BackButton