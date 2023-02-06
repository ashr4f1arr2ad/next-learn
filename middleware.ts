import { NextResponse, NextRequest } from 'next/server'
// import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  // return;
}
