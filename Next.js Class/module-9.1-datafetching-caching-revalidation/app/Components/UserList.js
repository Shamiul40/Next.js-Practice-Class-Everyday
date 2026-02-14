import { getUsers } from '@/action/user'
import React from 'react'

export default async function UserList() {

  const users = await getUsers()

  return (
    <div className='border border-gray-400 w-full p-4 m-4'>
      <h1>User List</h1>

    {users.length >0 ? (
      
        users.map((user, index)=><p key={user.id}> {index+1}. {" "} {user.name} - {user.email} </p>)
      
    ) : (
      <div>no user found</div>
    )
     }

      
    </div>
  )
}
