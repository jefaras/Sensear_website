import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function generateNonce(): string {
    const bytes = new Uint8Array(16)
    crypto.getRandomValues(bytes)
    const binary = Array.from(bytes, (b) => String.fromCharCode(b)).join('')
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function buildCsp(nonce: string): string {
    const isDevelopment = process.env.NODE_ENV !== 'production'

    return [
        "default-src 'self'",
        "base-uri 'self'",
        "frame-ancestors 'self'",
        "img-src 'self' data: blob: https:",
        `script-src 'self' 'nonce-${nonce}'${isDevelopment ? " 'unsafe-eval'" : ''} https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' data: https://fonts.gstatic.com",
        "frame-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://w.soundcloud.com",
        "connect-src 'self' https:",
        "object-src 'none'",
    ].join('; ')
}

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const nonce = generateNonce()
    const csp = buildCsp(nonce)
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set('x-pathname', pathname)

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
    response.headers.set('Content-Security-Policy', csp)
    return response
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, static assets, and special files
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml|.*\\..*).*)'],
}
