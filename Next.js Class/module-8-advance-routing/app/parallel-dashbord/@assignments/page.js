import deLayFunc from '@/app/lib/wait'
import React from 'react'

export default async function AssignmentPage() {
  await deLayFunc(2000)

  return (
    <div className='border text-2xl border-white flex justify-center items-center h-[250px]'>
      <h1>Assignment</h1>
    </div>
  )
}
