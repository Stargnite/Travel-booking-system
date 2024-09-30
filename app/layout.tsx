import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader';

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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>
          <Navbar userId={userId} />
          <NextTopLoader
            color="#90EE90"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <main className='relative overflow-hidden'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
