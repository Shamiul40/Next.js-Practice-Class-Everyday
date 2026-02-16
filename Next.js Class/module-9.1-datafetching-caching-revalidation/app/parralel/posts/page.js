import { getPosts } from "@/app/lib/getPosts";
import Link from "next/link";
import React from "react";

export default async function ParallelPage() {
  const posts = await getPosts();
  

  return (
    <div className="mt-10">
        <h1 className="text-2xl my-2">All Posts Here</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <Link href={`posts/${post.id}`} key={post.id}>
            <li >
              {post.id}. {post.title}
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        <div>data not found</div>
      )}
    </div>
  );
}
