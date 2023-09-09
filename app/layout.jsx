import '@/styles/globals.css'
import Navbar from '@components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todos List',
  description: 'Created by Devansh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
