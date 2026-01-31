import Link from 'next/link'
import React from 'react'

export default function Folder1() {
  return (
    <div className='min-h-44 flex flex-col '>
      <h1>folder 1 here</h1>
      <button><Link href="/folder1/folder2" className='text-blue-500'>go to folder 2</Link></button>
    </div>
  )
}
