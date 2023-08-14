import React from 'react'
import Button from './Button'
import Pnavbarlinks from './Pnavbarlinks'

const Pnavbar = () => {
  return (
    <nav className='bg-white'>
      <div className="flex items-center font-medium justify-around">
        
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
            
            <Pnavbarlinks />
        </ul>
        <div className="md:block hidden">
        <Button />
        </div>
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4`}>
        <Pnavbarlinks /> 
            <div className="py-5">
            <Button />
            </div>
        </ul>
      </div>
    </nav>
  )
}

export default Pnavbar
