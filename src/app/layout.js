
import './globals.css'
import { Inter } from 'next/font/google'
import NavM from './Components/NavM'
import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Binary Battles',
  description: 'Created by ISA VIT'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <Navbar />
        <main >{children}</main>
      </body>
     
      
    </html>
  )
}
