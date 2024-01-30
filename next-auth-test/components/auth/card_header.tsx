'use client'
import { Text } from "@mantine/core";

interface HeaderProps {
    label: string;
}

export const CardHeader = ({label}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Text fw={700} size="25px">Next-Auth</Text>
            <p className="text-gray-500 relative bottom-3">{label}</p>
        </div>
    )
}