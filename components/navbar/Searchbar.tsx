import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Searchbar() {
  return (
      <div className='bg-gray-200 rounded-full w-fit p-2'>
        <span className='flex items-center gap-2'><BiSearch /> <input placeholder='Search' type='search' className=' border-none pointer-events-auto outline-none ' /></span>
       
    </div>
  )
}

export default Searchbar