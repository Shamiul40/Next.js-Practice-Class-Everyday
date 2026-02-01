import React from 'react'

export default function GalleryLayout({children, modal}) {
  return (
    <div>
      {modal}
      {children}
    </div>
  )
}
