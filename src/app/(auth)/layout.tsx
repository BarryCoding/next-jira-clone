'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isSignIn = pathname === '/sign-in'
  return (
    <section className='bg-neutral-100 min-h-screen'>
      <div className='mx-auto max-w-screen-2xl p-4'>
        <nav className='flex justify-between items-center'>
          <Image src='/logo.svg' alt='Logo' width={180} height={37} priority />
          <Button asChild variant='secondary'>
            <Link href={isSignIn ? '/sign-up' : '/sign-in'}>{isSignIn ? 'Sign Up' : 'Login'}</Link>
          </Button>
        </nav>
        <div className='flex flex-col items-center justify-center pt-4 md:pt-14'>{children}</div>
      </div>
    </section>
  )
}