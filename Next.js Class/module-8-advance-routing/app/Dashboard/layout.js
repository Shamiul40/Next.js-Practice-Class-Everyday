import React, { Children } from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 justify-center items-start'>
      {children}
    </div>
  )
}
