import { NextRequest } from "next/server"

let locales = ['en', 'fr', 'es', 'nl']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
	const acceptLanguageHeader = request.headers.get("Accept-Language");

	if (!acceptLanguageHeader) {
		return "en";
	}

	const locales = acceptLanguageHeader.split(",");

	// Get the first locale that is supported by your application
	return locales.find((locale) => locales.includes(locale));
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl

	// Skip processing for image files
	if (/\.(jpg|jpeg|png|gif|svg)$/i.test(pathname)) {
		return;
	}

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	return Response.redirect(request.nextUrl)
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next).*)',
		// Optional: only run on root (/) URL
		// '/'
	],
}