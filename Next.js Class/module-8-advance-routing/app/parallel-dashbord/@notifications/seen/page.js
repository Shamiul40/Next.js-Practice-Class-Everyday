import deLayFunc from '@/app/lib/wait'
import Link from 'next/link'
import React from 'react'

export default async function SeenNotificationPage() {




  return (
    <div className='border text-2xl border-white flex gap-2 justify-center items-center h-[500px] row-span-2'>
      <h1>Seen Notification here</h1>
       <div><Link className='text-blue-600 ' href='/parallel-dashbord'>All</Link></div>
    </div>
  )
}
