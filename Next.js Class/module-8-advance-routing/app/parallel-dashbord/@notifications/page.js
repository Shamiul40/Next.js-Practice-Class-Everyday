import deLayFunc from '@/app/lib/wait'
import React from 'react'

export default async function NotificationPage() {
  await deLayFunc(3000)

  throw new Error("error in notification")

  return (
    <div className='border text-2xl border-white flex justify-center items-center h-[500px] row-span-2'>
      <h1>Notification</h1>
    </div>
  )
}
