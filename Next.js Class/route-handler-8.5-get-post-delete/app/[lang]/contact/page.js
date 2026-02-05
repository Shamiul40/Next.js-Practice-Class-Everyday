import React from 'react'
import { getDictionary } from '../dictionaries/dictionaries'

export default async function ContactPage({params : {lang}}) {

  const dict = await getDictionary(lang)

  return (
    <div>
      <h1>{dict.contact}</h1>
    </div>
  )
}
