import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kareem Ashraf - Web Developer',
  description: 'Modern & Mobile-Friendly Websites | Professional Web Developer Portfolio',
  keywords: ['web developer', 'frontend developer', 'react', 'next.js', 'modern websites'],
  authors: [{ name: 'Kareem Ashraf' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Kareem Ashraf - Web Developer',
    description: 'Modern & Mobile-Friendly Websites | Professional Web Developer Portfolio',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-950 text-dark-50 antialiased`}>
        {children}
      </body>
    </html>
  )
}
