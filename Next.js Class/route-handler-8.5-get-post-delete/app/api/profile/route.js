export async function GET(request){
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));
    return new Response("profile api")
}