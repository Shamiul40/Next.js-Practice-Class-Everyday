import { getPost } from '@/app/lib/getPost'
import React from 'react'

export default async function PostPage({params : {id}}) {

    const post = await getPost(id)
   
  return (
    <div className='mt-10'>
      <h1 className='border border-blue-300 px-2 py-1'>{post.title}</h1>
    </div>
  )
}
