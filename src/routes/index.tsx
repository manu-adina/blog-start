import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: App,
})

function App() {
    return (
        <div>
            <h1 className="font-mono">Hello World</h1>
            <div></div>
        </div>
    )
}
