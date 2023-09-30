import React from 'react'
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className='flex flex-col'>

    <div className='flex justify-center items-center'>
    <Link to={'/login'} className='border border-white-500 mb-2 bg-white hover:bg-gray-500 hover:text-white font-mono px-3 mt-2 rounded-full'>Start</Link>
    </div>
       
    <div className="flex md:flex-row md:items-center justify-center items-center md:justify-center md:gap-4 flex-col mt-8">
     <div className=' relative flex flex-col border border-gray-300 rounded-md shadow-2xl md:w-[400px] md:h-[300px] h-[200px] mb-4 w-[200px] p-2'>
        <div className="flex justify-center items-center">
            <h5 className="font-bold text-white">
                Smart Contacts
            </h5>
            </div>
            <div className="rounded-sm mx-auto h-full flex flex-col w-full p-4">
                <p className=" md:text-lg text-xl font-serif">
                    Search Botswana Government ministries, parastials, district councils contact details
                    
                </p>
                

            </div>

        </div>
    </div>
      
    </div>
  )
}

export default WelcomePage
