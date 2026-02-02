import comments from "@/app/data/comments"

export const GET =async(request, {params}) =>{
  const commentId = params.id

  const comment = comments.find(comment=>comment.id === parseInt(commentId))

  return Response.json(comment)
}