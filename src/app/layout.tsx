import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { cn } from '@/lib/utils'
import Menu from '@/components/Menu'
import PreloadHandler from '@/components/PreloadHandler'
import { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About Me',
  description: 'My portfolio using the template from "Forty by HTML5 UP"',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript>
          <link rel="stylesheet" href="assets/css/noscript.css" />
        </noscript>
      </head>
      <body className={cn(inter.className, 'is-preload')}>
        <PreloadHandler />
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
