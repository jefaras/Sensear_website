'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>
    }
}

export function GtmPageview() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const isFirstPageview = useRef(true)
    const search = searchParams.toString()

    useEffect(() => {
        if (isFirstPageview.current) {
            isFirstPageview.current = false
            return
        }

        const pagePath = search ? `${pathname}?${search}` : pathname
        const dataLayer = window.dataLayer || []

        window.dataLayer = dataLayer
        dataLayer.push({
            event: 'page_view',
            page_location: window.location.href,
            page_path: pagePath,
            page_title: document.title,
        })
    }, [pathname, search])

    return null
}
