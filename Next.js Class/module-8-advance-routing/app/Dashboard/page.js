import React from 'react'
import Assignment from '../Components/Assignment'
import Notification from '../Components/Notification'
import Quiz from '../Components/Quiz'

export default function dashboardPage() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 justify-center items-center gap-4 p-4'>
      <Assignment></Assignment>
         <Notification></Notification>
         <Quiz></Quiz>
    </div>
  )
}
