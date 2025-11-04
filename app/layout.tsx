import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Haluk Akakçe | Turkish Contemporary Artist',
  description: 'Official website of Haluk Akakçe (1970–2023), Turkish multimedia artist exploring the intersection of technology, perception, and the body through paintings, video installations, and public projects.',
  keywords: 'Haluk Akakçe, contemporary art, Turkish artist, video art, installations, digital art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
