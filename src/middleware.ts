import {NextRequest, NextResponse} from 'next/server';
import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const getLocale = (request: NextRequest) => {
    const acceptLanguage =
        request.headers.get('accept-language') ?? 'ko';

    const languages = new Negotiator({
        headers: {
            'accept-language': acceptLanguage,
        },
    }).languages();

    return match(languages, ['ko', 'en'], 'ko');
};


export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const locale = getLocale(request);

    const pathnameIsMissingLocale = ['ko', 'en'].every(
        locale =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url),
        );
    }

};

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|image|favicon.ico|sitemap.xml|robots.txt|manifest.*).*)',
    ],
};
