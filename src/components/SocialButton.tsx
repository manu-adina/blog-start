import { Button } from './ui/button'

interface SocialButtonProps {
    label: string
    icon: React.ReactNode
    href: string
}

export default function SocialButton({ href, icon, label }: SocialButtonProps) {
    return (
        <Button className="rounded-2xl" variant="outline" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
                {icon}
                <span>{label}</span>
            </a>
        </Button>
    )
}
