'use client';

import { usePathname } from 'next/navigation';
import { PageTransition } from '@/components/motion';
import { getBasePath } from '@/lib/localized-path';

/**
 * Template re-renders on every navigation (unlike layout which persists),
 * making it the correct place for page transition animations.
 *
 * The `key` prop on PageTransition's inner motion div is driven by
 * the current pathname so AnimatePresence can detect route changes
 * and trigger exit → enter animations.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (getBasePath(pathname) === '/dorean-axiologisi') {
    return <>{children}</>;
  }

  return (
    <PageTransition key={pathname}>
      {children}
    </PageTransition>
  );
}
