import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { z } from 'zod'

const posts = defineCollection({
    name: 'posts',
    directory: 'content',
    include: '*.mdx',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishedAt: z.string(),
        author: z.string().default('Manu'),
        tags: z.array(z.string()).optional(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document)

        return {
            ...document,
            mdx,
            slug: document._meta.path,
        }
    },
})

export default defineConfig({
    collections: [posts],
})
