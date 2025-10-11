import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (host.startsWith('test.')) {
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }

  if (host === 'www.fajanzen.de') {
    const url = request.nextUrl
    url.host = 'fajanzen.de'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
