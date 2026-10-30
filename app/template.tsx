'use client'

import { usePathname } from 'next/navigation'

import { PageTransition } from '@/components/motion'
import { getBasePath } from '@/lib/localized-path'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (getBasePath(pathname) === '/dorean-axiologisi') {
    return <>{children}</>
  }

  return <PageTransition key={pathname}>{children}</PageTransition>
}
