/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, children, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="ml-1 inline-block h-4 w-4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  )
}

export default CustomLink
