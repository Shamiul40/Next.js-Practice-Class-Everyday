// import { NextResponse } from "next/server"

// export function middleware(request){
//     console.log("hello")

//    console.log(request.url)


//     return NextResponse.redirect(new URL("/", request.url))


  

// }

// export const config ={
//     matcher : "/api",
// }




const defaultLocale = "en"
let locales = ["en", "bn"]


export function middleware(request) {
    const pathName = request.nextUrl.pathName

    const pathNameIsMissingLocale = locales.every(locale=> 
        !pathName.startsWith(`/${locale}`) &&
        !pathName.startsWith(`/${locale}/`)
    
    )
}