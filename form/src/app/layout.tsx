import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar/page'
import Footer from '@/app/components/footer/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Form ',
  description: 'Form submition ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#a87a58]'>
      <body className= {inter.className}>
        <Navbar/>
        <div className=" pt-64 lg:pt-0 pb-28">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
