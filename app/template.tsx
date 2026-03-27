'use client'

import { usePathname } from 'next/navigation'

import { PageTransition } from '@/components/motion'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return <PageTransition key={pathname}>{children}</PageTransition>
}
