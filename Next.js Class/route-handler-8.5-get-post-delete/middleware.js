import { NextResponse } from "next/server"

export function middleware(){
    console.log("i am middleware")

    return NextResponse.json({
        hello : "i am so happy"
    })
}