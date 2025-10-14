import { defineConfig } from 'vite'
import contentCollections from '@content-collections/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import mdx from '@mdx-js/rollup'

const config = defineConfig({
    plugins: [
        contentCollections(),
        cloudflare({ viteEnvironment: { name: 'ssr' } }),
        viteTsConfigPaths({
            projects: ['./tsconfig.json'],
        }),
        tailwindcss(),
        tanstackStart(),
        mdx(),
        viteReact(),
    ],
})

export default config
