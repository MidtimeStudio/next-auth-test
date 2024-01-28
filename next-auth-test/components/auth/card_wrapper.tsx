'use client';
import { Button, Card, Group } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css'
import { CardHeader } from "@/components/auth/card_header";
import { CardSocial } from "@/components/auth/card_social";
import { BackButton } from '@/components/auth/card_backButton'

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) => {
    return (
        <MantineProvider>
            <Card radius='sm' shadow="sm" padding='lg'>
                <Group>
                    <CardHeader label={headerLabel}/>
                </Group>
                {children}
                {showSocial && (<CardSocial/>)}
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </Card>
        </MantineProvider>
    )
}