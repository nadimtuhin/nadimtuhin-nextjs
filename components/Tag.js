import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="m-1 inline-flex items-center rounded-full bg-primary-100 px-3.5 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-primary-300 transition-all hover:bg-primary-200 hover:ring-primary-400 dark:bg-primary-900/10 dark:text-primary-200 dark:ring-primary-400/20 dark:hover:bg-primary-900/20 dark:hover:ring-primary-400/30">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
