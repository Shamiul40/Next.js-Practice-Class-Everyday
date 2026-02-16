import { getComments } from "@/app/lib/getComments";
import { getPost } from "@/app/lib/getPost";
import React from "react";

export default async function PostPage({ params: { id } }) {
  const post = await getPost(id);
  const comments = await getComments(id)

  return (
    <div className="mt-10">
      <h1 className="text-2xl my-5">Single Post Here</h1>
      <div className="border border-blue-300">
        <h1 className="px-2 py-1">{post.title}</h1>
        <h1 className=" px-2 py-1">{post.body}</h1>
      </div>
      <div className="mt-6 border-t border-green-300">
        <ul className="mt-5">{
            comments.map(comment=> 
            <li key={comment.id}>{comment.id }. {comment.body} </li>)
            }</ul>
      </div>
    </div>
  );
}
