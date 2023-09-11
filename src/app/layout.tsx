import TopBar from '@/components/TopBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Calculator',
  description: 'A simple calculator app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-[100dvh] overflow-x-hidden bg-slate-900`}>
        <TopBar />
        {children}
      </body>
    </html>
  )
}
