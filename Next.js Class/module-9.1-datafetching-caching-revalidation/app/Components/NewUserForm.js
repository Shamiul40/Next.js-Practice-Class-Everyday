import connectMongo from '@/dbconnect/connectMongo'
import React from 'react'

export default async function NewUserForm() {

    const addUser=async(formData)=>{
       "use server" 
       
       const name = formData.get("name")
       const email = formData.get("email")

       const user = {
        name,
        email
       }

       await connectMongo()

    }

  return (
    <form action={addUser} className='border border-gray-200 w-full m-4 p-4'>
       <div>
            <input className='w-full p-2 m-2 text-black' name='name' type='text' placeholder='name here'/>
       </div>
       <div>
            <input className='w-full p-2 m-2 text-black' name='email' type='email' placeholder='email here'/>
       </div>
        <div className='flex justify-center items-center bg-green-600 p-2 m-2 w-2/12 mx-auto'>
            <button type='submit'>submit</button>
        </div>
    </form>
  )
}




