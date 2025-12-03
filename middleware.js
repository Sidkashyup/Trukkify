import { NextResponse } from 'next/server'

const languages = ['en', 'hi', 'bn', 'gu', 'ta', 'te', 'mr', 'kn']
const fallbackLng = 'en'
const cookieName = 'i18next'

export const config = {
  matcher: [
    '/',
    '/(en|hi|bn|gu|ta|te|mr|kn)/:path*',
  ],
}

export function middleware(request) {
  console.log('🔥 MIDDLEWARE RUNNING for:', request.nextUrl.pathname)
  
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  console.log('📍 Pathname:', pathname)
  console.log('✅ Has locale?', pathnameHasLocale)

  if (pathnameHasLocale) {
    console.log('✅ Locale found, continuing...')
    return NextResponse.next()
  }

  // Get locale from cookie or use fallback
  const cookieLocale = request.cookies.get(cookieName)?.value
  const locale = languages.includes(cookieLocale) ? cookieLocale : fallbackLng

  console.log('🍪 Cookie locale:', cookieLocale)
  console.log('🌍 Using locale:', locale)

  // Redirect to locale path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  console.log('🔄 Redirecting to:', newUrl.toString())
  
  const response = NextResponse.redirect(newUrl)
  response.cookies.set(cookieName, locale)
  
  return response
}