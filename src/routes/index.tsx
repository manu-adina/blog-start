import { motion } from 'motion/react'
import { createFileRoute } from '@tanstack/react-router'
import Instagram from '@/icons/Instagram'
import SocialButton from '@/components/SocialButton'
import X from '@/icons/X'
import Github from '@/icons/Github'

export const Route = createFileRoute('/')({
    component: App,
})

const socials = [
    {
        label: 'manu.adina',
        href: 'https://www.instagram.com/manu.adina/',
        icon: Instagram,
    },
    {
        label: 'manu-adina',
        href: 'https://www.github.com/manu-adina/',
        icon: Github,
    },
    {
        label: 'manu_adina',
        href: 'https://www.x.com/manu_adina/',
        icon: X,
    },
]

function App() {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="flex">
                    <h1>
                        Hi... I'm Manu{' '}
                        <motion.span
                            className="inline-block text-5xl origin-[70%_70%]"
                            animate={{
                                rotate: [0, 14, -8, 14, -4, 10, 0],
                            }}
                            transition={{
                                duration: 0.7,
                                ease: 'easeInOut',
                            }}
                        >
                            👋
                        </motion.span>
                    </h1>
                    <img
                        className="w-[200px] rounded-full block"
                        src="profile.jpg"
                        alt="manu's profile picture"
                    />
                </div>
                <div className="flex gap-2">
                    {socials.map(({ label, href, icon: Icon }) => (
                        <SocialButton
                            key={label}
                            label={label}
                            href={href}
                            icon={<Icon className="size-6" />}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
