import React from 'react'
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex md:flex-row md:items-center justify-center items-center md:justify-center md:gap-4 flex-col mt-8">
        <div className=' relative flex flex-col border bg-green-500 rounded-md shadow-2xl md:w-[400px] md:h-[300px] h-[200px] mb-4 w-[200px] p-2'>
        <div className="flex justify-between">
            <h5 className="text-xl text-white font-semibold">
                Academic 
            </h5>
            <Link to={'/login'} className='border border-white-500 mb-2 bg-white hover:bg-green-500 hover:text-white font-mono px-3 mt-2 rounded-full'>Start</Link>
            </div>
            <div className=" bg-green-600  rounded-sm mx-auto h-full flex flex-col w-full p-1">
                <p className="text-white md:text-lg text-xs font-serif">
                    -We cover Goverment Primary, Secondary and Senior schools syllabus
                    
                </p>
                <p className="text-white md:text-lg text-xs font-serif">
                    -Revision materials for all Subjects  except Setswana
                </p>
                <p className="text-white md:text-lg text-xs font-serif">
                    -Answers are based on Botswana Education Syllabars  
                </p>

            </div>

        </div>
        <div className=' flex flex-col border bg-green-500 rounded-md shadow-2xl md:w-[400px] md:h-[300px] h-[200px] mb-4 w-[200px] p-2'>
            <div className="flex justify-between">
            <h5 className="text-xl text-white font-semibold">
                Public 
            </h5>
            <Link to={'/login'} className='border border-white-500 mb-2 bg-white hover:bg-green-500 hover:text-white font-mono px-3 mt-2 rounded-full'>Start</Link>
            </div>
            <div className=" bg-green-600  rounded-sm mx-auto h-full flex flex-col w-full p-1">
                <p className="text-white md:text-lg text-xs font-serif">
                    -Ask for contacts. We have a BTC phonebook. Only Botswana Phone Numbers
                    
                </p>
                <p className="text-white md:text-lg text-xs font-serif">
                    -Ask for CIPA. Want to know more about CIPA procedures. We have you covered

                    
                </p>

            </div>

        </div>
        <div className=' flex flex-col border bg-green-500 rounded-md shadow-2xl md:w-[400px] md:h-[300px] h-[200px] mb-4 w-[200px] p-2'>
        <div className="flex justify-between">
            <h5 className="text-xl text-white font-semibold">
               Business COMING SOON..
            </h5>
            </div>
            <div className=" bg-green-600  rounded-sm mx-auto h-full flex flex-col w-full p-1">
                <p className="text-white md:text-lg text-xs font-serif">
                    -Enhance your pictures 
                    
                </p>
                <p className="text-white md:text-lg text-xs font-serif">
                    Make a business logo here
                    
                </p>
                <p className="text-white md:text-lg text-xs font-serif">
                    Make a Shirt design according to your imagination
                    
                </p>

            </div>

        </div>
    </div>
      
    </div>
  )
}

export default WelcomePage
