export async function GET(request){
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders);
    return new Response("profile api")
}