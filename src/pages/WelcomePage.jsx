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
            <h5 className="font-bold ">
                Smart PhoneBook
            </h5>
            </div>
            <div className="rounded-sm mx-auto h-full flex flex-col w-full p-4">
                <p className="px-8 mx-4 my-2 md:text-xl text-sm text-red-300 font-serif">
                    Search phonenumbers for 
                </p>
                <p className=" md:text-lg text-xl font-serif">
                    Botswana Government ministries, parastials, district councils contacts   
                </p>
                <p className=" md:text-lg text-xl font-serif">
                    Blood transfusion centers contacts   
                </p>
                <p className=" md:text-lg text-xl font-serif">
                    BTC shops and Mobile dealer     
                </p>
                <p className=" md:text-lg text-xl font-serif">
                   BHC Botswana Housing Corporation   
                </p>

                

            </div>

        </div>
        <div className=' relative flex flex-col border border-gray-300 rounded-md shadow-2xl md:w-[400px] md:h-[300px] h-[200px] mb-4 w-[200px] p-2'>
        <div className="flex justify-center items-center">
            <h5 className="font-bold">
                Smart Contracts / agreement
            </h5>
            </div>
            <div className="rounded-sm mx-auto h-full flex flex-col w-full p-4">
                <p className="px-8 mx-4 my-2 md:text-xl text-sm text-red-300 font-serif">
                     Contract Generator 
                </p>
                <p className=" md:text-lg text-xl font-serif">
                    Artist and Record label contract 
                </p>
                <p className=" md:text-lg text-xl font-serif">
                    Employee and Employer contract   
                </p>
                <p className=" md:text-lg text-xl font-serif">
                    Money landing contract    
                </p>
                <p className=" md:text-lg text-xl font-serif">
                   Any contract between two parties   
                </p>

                

            </div>

        </div>
    </div>
      
    </div>
  )
}

export default WelcomePage
