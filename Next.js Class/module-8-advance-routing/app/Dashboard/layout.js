import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className='min-h-screen p-6'>
      <div className='grid grid-cols-2 grid-rows-2 gap-6 justify-center items-start'>
        {children}
      </div>
    </div>
  )
}
