import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-pathname', pathname)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, static assets, and special files
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml|.*\\..*).*)'],
}
