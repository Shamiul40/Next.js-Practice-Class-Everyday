import React from 'react'

export default function Comment({commentPromise}) {

    const comments = commentPromise;

  return (
    <div>
      <ul className="mt-5">{
            comments.map(comment=> 
            <li key={comment.id}>{comment.id }. {comment.body} </li>)
            }</ul>
    </div>
  )
}
