import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Check if current time is between 6 AM and 6 PM
  const isDaytime = () => {
    const hours = new Date().getHours()
    return hours >= 6 && hours < 18
  }

  useEffect(() => {
    setMounted(true)
    // Get saved theme preference or default to 'auto'
    const savedTheme = localStorage.getItem('theme') || 'auto'
    setTheme(savedTheme)

    // Set up auto theme switching based on time of day
    if (savedTheme === 'auto') {
      const interval = setInterval(() => {
        setTheme(isDaytime() ? 'light' : 'dark')
      }, 60000) // Update every minute
      return () => clearInterval(interval)
    }
  }, [setTheme])

  const toggleTheme = () => {
    // Cycle through themes: auto -> light -> dark -> auto
    const themeOrder = { auto: 'light', light: 'dark', dark: 'auto' }
    const newTheme = themeOrder[theme]
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const getThemeIcon = () => {
    if (!mounted) return null

    const icons = {
      auto: (
        <path
          fillRule="evenodd"
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
          clipRule="evenodd"
        />
      ),
      dark: <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />,
      light: (
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      ),
    }

    if (theme === 'dark' || resolvedTheme === 'dark') {
      return icons.dark
    } else if (theme === 'auto') {
      return icons.auto
    } else {
      return icons.light
    }
  }

  const getThemeTitle = () => {
    const titles = {
      auto: 'Automatic theme (Light 6AM-6PM, Dark 6PM-6AM)',
      light: 'Light theme (Better for daytime and readability)',
      dark: 'Dark theme (Easier on eyes at night, saves battery)',
    }
    return titles[theme]
  }

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={toggleTheme}
      title={mounted ? getThemeTitle() : ''}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {getThemeIcon()}
      </svg>
    </button>
  )
}

export default ThemeSwitch
