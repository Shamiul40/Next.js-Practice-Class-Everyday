import deLayFunc from '@/app/lib/wait'
import React from 'react'

export default async function QuizPage() {

  await deLayFunc(4000)

  return (
    <div className='border text-2xl border-white flex justify-center items-center h-[250px]'>
      <h1>Quiz</h1>
    </div>
  )
}
