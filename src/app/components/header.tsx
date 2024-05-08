import { cn } from "@/lib/utils";

interface HeaderProps {
    label: string
}

export default function Header ({label}: HeaderProps) {
    return (
        <div className="w-full flex flex-col gap-y-1 items-center justify-center">
            <h1 className={cn('text-3xl font-semibold')}>
                Auth
            </h1>
            <span className="text-muted-foreground text-sm">{label}</span>
        </div>
    )
}