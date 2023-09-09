import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='font-livvic bg-gray-200 w-full flex  max-md:flex-col justify-start gap-32 px-[8vw] items-center h-auto py-6  max-md:gap-3 z-50' >
      <div>
        <h4 className='text-xl font-semibold'>MyTodosList</h4>
      </div>
      <div className='text-lg font-medium flex gap-6'>
        <Link href={'/'}><h4>Home</h4></Link>
        <Link href={'/Mytodos'}><h4>My Todos</h4></Link>
      </div>
    </div>
  )
}

export default Navbar
