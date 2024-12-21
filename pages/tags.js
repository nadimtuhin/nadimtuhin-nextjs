import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')
  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">Tags</h1>

        <div className="flex flex-wrap gap-4">
          {Object.keys(tags).length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">No tags found.</p>
          )}
          {sortedTags.map((t) => {
            const fontSize = Math.max(1, Math.min(2, 1 + tags[t] / 10)) // Scale font size based on post count
            return (
              <Link
                key={t}
                href={`/tags/${kebabCase(t)}`}
                className="group relative inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                style={{ fontSize: `${fontSize}rem` }}
              >
                <span className="font-medium text-gray-800 dark:text-gray-200">{t}</span>
                <span
                  className="text-sm text-gray-500 dark:text-gray-400"
                  aria-label={`${tags[t]} posts`}
                >
                  {tags[t]}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
