import React from 'react'

export default function NewUserForm() {
  return (
    <div>
       <div>
            <input name='name' type='text' placeholder='name here'/>
       </div>
       <div>
            <input name='email' type='email' placeholder='email here'/>
       </div>
        <div>
            <button>submit</button>
        </div>
    </div>
  )
}
