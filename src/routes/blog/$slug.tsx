import { cn } from '@/lib/utils'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$slug')({
    beforeLoad: () => ({
        allPosts,
    }),
    loader: async ({ params, context: { allPosts } }) => {
        const slug = params.slug
        const post = allPosts.find((post) => post._meta.path === slug)
        if (!post) {
            throw redirect({
                to: '/blog',
            })
        }

        return { post }
    },
    component: RouteComponent,
})

function RouteComponent() {
    const { post } = Route.useLoaderData()
    return (
        <section className="">
            <article className="container relative max-w-3xl">
                <div>
                    {post.publishedAt && (
                        <time
                            dateTime={post.publishedAt}
                            className="block text-sm text-muted-foreground"
                        >
                            Published on {formatDate(post.publishedAt)}
                        </time>
                    )}
                    <h1 className="my-4 inline-block font-heading text-4xl leading-tight lg:text-5xl">
                        {post.title}
                    </h1>
                </div>
                <Mdx code={post.mdx} />
                <hr className="mt-12" />

                <div className="flex justify-center py-6 lg:py-10">
                    <Link
                        to="/blog"
                        className={cn(buttonVariants({ variant: 'ghost' }))}
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        See all posts
                    </Link>
                </div>
            </article>
        </section>
    )
}
