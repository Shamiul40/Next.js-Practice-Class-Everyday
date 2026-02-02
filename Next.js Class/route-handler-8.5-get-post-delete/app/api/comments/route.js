import comments from "@/app/data/comments"

export const GET=async()=>{
 return Response.json(comments)
}
 

 export const POST =async(request)=>{

    const id = comments.length + 1;

    const comment = await request.json();


    const newComments = {
        id,
        text: comment.text
    }

    comments.push(newComments)
    console.log("comments and newcomments here", comment, newComments)

    return new Response(JSON.stringify(newComments), {
        headers :{
            "content-type" : "application / json"
        },
        status : 201,
    })
 }