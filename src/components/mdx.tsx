import { useMDXComponent } from '@content-collections/mdx/react'

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return <Component />
}
