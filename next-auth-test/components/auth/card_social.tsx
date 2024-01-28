'use client';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa'
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css'

export const CardSocial = () => {
    return (
        <MantineProvider>
            <div className="flex items-center w-full gap-x-4 justify-center p-4">
                <Button color="black" leftSection={<FcGoogle size={14} />} variant="light">Google</Button>
                <Button color="black" leftSection={<FaGithub size={14} />} variant="light">Github</Button>
            </div>
        </MantineProvider>
        
    )
}

export default CardSocial