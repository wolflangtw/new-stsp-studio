import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Roboto } from 'next/font/google'
import '@/styles/globals.scss'

const Navbar = dynamic(() => import('@/app/(components)/Navbar'), {
  ssr: true,
})
const Footer = dynamic(() => import('@/app/(components)/Footer'), {
  ssr: false,
})

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'STSP Studio',
  description: '地圖製作團隊',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
