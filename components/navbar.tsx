import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <div>
          This will be a story switcher
        </div>
        <div>
          This will be the routes
        </div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserButton afterSignOutUrl='/'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar