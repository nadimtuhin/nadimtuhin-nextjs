import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const LoadingBar = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  if (!loading) return null

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="h-1 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div className="h-full w-1/4 animate-[loading_2s_ease-in-out_infinite] bg-primary-500" />
      </div>
    </div>
  )
}

export default LoadingBar
