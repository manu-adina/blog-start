import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { Mdx } from '@/components/mdx'

export const Route = createFileRoute('/blog/$slug')({
    loader: ({ params }) => {
        const slug = params.slug
        const post = allPosts.find((p) => p._meta.path === slug)
        if (!post) throw notFound()
        return { post }
    },
    component: RouteComponent,
})

function RouteComponent() {
    const { post } = Route.useLoaderData()

    return (
        <article>
            <Mdx code={post.mdx} />
        </article>
    )
}
