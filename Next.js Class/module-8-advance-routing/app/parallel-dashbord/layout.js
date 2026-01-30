import React from "react";

export default function ParallelLayout({ children, assignments, notifications, quiz  }) {
  return (
   <div className='min-h-screen p-6'>
     {children}
      <div className='grid grid-cols-2 grid-rows-2 gap-6 justify-center items-start'>
        {assignments}
        {notifications}
        {quiz}
       
      </div>
    </div>
  );
}
