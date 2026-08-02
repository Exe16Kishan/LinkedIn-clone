import { NavList } from '@/utils/NavList'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center gap-10 mt-2'>
        {
          NavList.map((item , index)=>{
                return (
                    <div key={item.id} className='flex flex-col items-center gap-2'>
                        <h1 className='text-2xl' >{item.logo}</h1>
                        <h1>{item.title}</h1>
                    </div>
                )
          })  
        }
    </div>
  )
}

export default Navbar