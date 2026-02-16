import { getPost } from '@/app/lib/getPost'
import React from 'react'

export default async function PostPage({params : {id}}) {

    const post = await getPost(id)
    console.log(post)
  return (
    <div>
      <h1>get post</h1>
    </div>
  )
}
