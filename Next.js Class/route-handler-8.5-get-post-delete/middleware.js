import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "bn"]


function getLocale(request){

}

export function middleware(request){
    //get pathname from the request url
    const pathName = request.nextUrl.pathName;

    const pathNameIsMissingLocale = locales.every(locale=> 
        !pathName.startsWith(`/${locale}`) && 
        !pathName.startsWith(`/${locale}/`)
    )

    //detect pathname
    if(pathNameIsMissingLocale) {
        const locale = getLocale(request)

        
        return NextResponse.redirect(new URL(`/${locale}/${pathName}` , request.url))

    }

    return NextResponse.next()
}