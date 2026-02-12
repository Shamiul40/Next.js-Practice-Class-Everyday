import { NextResponse } from "next/server"


export async function GET(request){

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok) {
        throw new Error("no post here")

    }
 const data = await res.json()

 return NextResponse.json(data)

}