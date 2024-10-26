'use client'

import { useEffect } from 'react'

export default function PreloadHandler() {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.body.classList.remove('is-preload')
      }, 100)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return null
}
