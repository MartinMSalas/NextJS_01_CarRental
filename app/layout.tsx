import { Footer, Navbar } from '@/components'
import './globals.css'

import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Car Rental App',
  description: 'Discover the best car rental deals and discounts in the world !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative overflow-y-visible ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
