import comments from "@/app/data/comments"
import { comment } from "postcss"

export const GET =async(request, {params}) =>{
  const commentId = params.id

  const comment = comments.find(comment=>comment.id === parseInt(commentId))

  return Response.json(comment)
}


export const PATCH =async(request, {params})=>{
    const comment = await request.json();
    const id = params.id
        console.log("comment", comment)
    const commentIndex = comments.findIndex(comment=>comment.id === parseInt(id))

    console.log("comment index ", commentIndex)

    comments[commentIndex].text = comment.text

    return Response.json(comments[commentIndex])
}


export const DELETE =async(request, {params})=>{

const id = params.id

const commentIndex = comments.findIndex(comment=>comment.id === parseInt(id))

const commentToDelete = comments[commentIndex];

comments.splice(commentIndex, 1)

return Response.json(commentToDelete)

}