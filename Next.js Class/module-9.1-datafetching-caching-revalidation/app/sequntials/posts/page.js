import { getPosts } from "@/app/lib/getPosts";
import Link from "next/link";
import React from "react";

export default async function SequentialPage() {
  const posts = await getPosts();
  

  return (
    <div className="mt-10">
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
