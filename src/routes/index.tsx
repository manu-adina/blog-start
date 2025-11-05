import { motion } from 'motion/react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import Instagram from '@/icons/Instagram'

export const Route = createFileRoute('/')({
    component: App,
})

function App() {
    return (
        <div className="flex justify-between lg:my-24 md:my-12 mx-4 md:mx-16 lg:mx-96">
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
                className="w-[200px] rounded-full"
                src="profile.jpg"
                alt="manu's profile picture"
            />
            <div>
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => alert('Clicked!')}
                >
                    <Instagram />
                </Button>
            </div>
        </div>
    )
}
