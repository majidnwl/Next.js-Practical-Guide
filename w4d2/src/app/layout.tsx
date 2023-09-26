// import './globals.css'
import Footer from '@/components/elements/Footer'
import Header from '@/components/elements/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Week 1 Day 4',
  description: 'We are learning next.js at ehsaslab',
  keywords: 'ehaslab, next.js, tailwind'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/rt-plugins.css" />
        <link rel="stylesheet" href="/assets/css/app.css" />
      </head>
      <body className={inter.className + 'font-gilroy font-medium text-gray text-lg leading-[27px]'} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
