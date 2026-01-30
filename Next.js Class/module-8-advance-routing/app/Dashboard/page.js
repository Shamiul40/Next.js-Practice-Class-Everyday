import React from 'react'
import Assignment from '../Components/Assignment'
import Notification from '../Components/Notification'
import Quiz from '../Components/Quiz'

export default function dashboardPage() {
  return (
    <>
      <Assignment />
      <Notification />
      <Quiz />
      <div></div>
    </>
  )
}
