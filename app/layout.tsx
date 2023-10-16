import './globals.css'
import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'
// import { Orbitron } from 'next/font/google'

const russo = Russo_One({ subsets: ['latin'], weight: "400", variable: '--font-russo',})

// const orbitron = Orbitron({ subsets: ['latin'], weight: "400", variable: '--font-russo',})

export const metadata: Metadata = {
  title: 'P.A. Dev and more',
  description: 'Pierre likes to write code and solve problems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${russo.variable}`}>{children}</body>
    </html>
  )
}
