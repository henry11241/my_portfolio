'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.body.classList.remove('is-preload')
      }, 100)
    }

    if (document.readyState === 'complete') {
      // Document is already loaded
      handleLoad()
    } else {
      // Wait for the window load event
      window.addEventListener('load', handleLoad)
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Forty by HTML5 UP</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript>
          <link rel="stylesheet" href="assets/css/noscript.css" />
        </noscript>
      </head>
      <body className={cn(inter.className, 'is-preload')}>
        <div id="wrapper">
          <Menu />
          {children}
        </div>
      </body>

      {/* script */}
      <Script src="assets/js/jquery.min.js" />
      <Script src="assets/js/jquery.scrolly.min.js" />
      <Script src="assets/js/jquery.scrollex.min.js" />
      <Script src="assets/js/browser.min.js" />
      <Script src="assets/js/breakpoints.min.js" />
      <Script src="assets/js/util.js" />
      <Script src="assets/js/main.js" />
    </html>
  )
}
