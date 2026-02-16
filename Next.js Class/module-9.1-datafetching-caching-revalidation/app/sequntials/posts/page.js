import { getPosts } from '@/app/lib/getPosts'
import React from 'react'

export default async function SequentialPage() {

    const posts = await getPosts();
    console.log(posts)

  return (
    <div className='mt-10'>
      {posts.length> 0 ? <ul>{posts.map(post=> (
        <li key={post.id}>{post.id}. {post.title}</li>
      ) )}</ul> : <div>data not found</div>}
    </div>
  )
}
