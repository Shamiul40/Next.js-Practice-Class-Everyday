import { getPost } from "@/app/lib/getPost"
import { NextResponse } from "next/server";

export const GET=async(request)=>{
   
    const post = await getPost();

    return NextResponse.json(post)

}