"use client"
import CarouselNews from './components/carouselNews'
// import Navbar from './components/navbar'
import GlobalState from './context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><GlobalState>
        <CarouselNews />
        {/* <Navbar /> */}
        <main>{children}</main>

      </GlobalState></body>
    </html>
  )
}
