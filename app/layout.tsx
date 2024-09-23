import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'

import {
  SignInButton,
  UserButton
} from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'


export const metadata: Metadata = {
  title: 'Travelling booking site',
  description: 'Your go-to site for booking your travels',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId }: { userId: string | null } = auth()


  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar userId={userId} />
          <main className='relative overflow-hidden'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
