import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="group m-1 inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600 ring-1 ring-primary-200 transition-all hover:bg-primary-100 hover:text-primary-700 hover:ring-primary-300 dark:bg-primary-900/10 dark:text-primary-300 dark:ring-primary-400/20 dark:hover:bg-primary-900/20 dark:hover:text-primary-200 dark:hover:ring-primary-400/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
