import type { Author } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { AuthorLayout } from '~/layouts/author-layout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function AboutPage() {
  const author = allAuthors.find((p) => p.slug === 'default') as Author
  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      {/* TODO: MDX seems to be broken on this page, so I'm back to JSX for now */}
      {/* <MDXLayoutRenderer code={author.body.code} /> */}
    </AuthorLayout>
  )
}
