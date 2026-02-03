import { cookies, headers } from "next/headers";

export async function GET(request){
    const requestHeaders = new Headers(request.headers);
    // another way to get headers..this is default next.js function
    const headersList = headers()

    console.log(requestHeaders.get("Authorization"));
    console.log(headersList.get("Authorization"));

    cookies().set("page", "2")
    console.log(cookies().get("page"))

    console.log(request.cookies.get("theme"))

    return new Response("profile api", {
        headers :{
            "set-cookie" : "theme=dark"
        }
    })
}