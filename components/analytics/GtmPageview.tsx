'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>
        __sensearPageviewDebug?: Array<Record<string, unknown>>
    }
}

export function GtmPageview() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const isFirstPageview = useRef(true)
    const search = searchParams.toString()

    useEffect(() => {
        const pagePath = search ? `${pathname}?${search}` : pathname
        const debugStore = window.__sensearPageviewDebug || []
        const debugBase = {
            pathname,
            search,
            pagePath,
            href: window.location.href,
            title: document.title,
            dataLayerLengthBefore: window.dataLayer?.length ?? 0,
        }

        window.__sensearPageviewDebug = debugStore

        if (isFirstPageview.current) {
            const debugEntry = {
                stage: 'initial-render-skipped',
                ...debugBase,
            }

            debugStore.push(debugEntry)
            console.info('[GtmPageview]', debugEntry)
            isFirstPageview.current = false
            return
        }

        const dataLayer = window.dataLayer || []
        const payload = {
            event: 'page_view',
            page_location: window.location.href,
            page_path: pagePath,
            page_title: document.title,
        }

        window.dataLayer = dataLayer
        dataLayer.push(payload)

        const debugEntry = {
            stage: 'page_view-pushed',
            ...debugBase,
            payload,
            dataLayerLengthAfter: dataLayer.length,
        }

        debugStore.push(debugEntry)
        console.info('[GtmPageview]', debugEntry)
    }, [pathname, search])

    return null
}
