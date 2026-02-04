let defaultLocale = "en";
let locales = ["en", "bn"]


export function middleware(request){

    const pathName = request.nextUrl.pathName;

    const pathNameIsMissingLocale = locales.every(locale=> 
        !pathName.startsWith(`/${locale}`) && 
        !pathName.startsWith(`/${locale}/`)
    )

}