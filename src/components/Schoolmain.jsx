import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Schoolmain = ({schooltype}) => {
    const [pri, setPri] = useState({});
    const [sec, setSec] = useState({});
    const [sen, setSen] = useState({});
  return (
    <>

<div className='my-4 mx-4 px-4 py-4 flex  gap-4'>
        <div className='w-[320px] h-[300px] border flex flex-col p-4'>
           <button className='bg-green-500 rounded-xl font-[Poppins] hover:bg-white hover:border hover:border-green-500 hover:text-black text-white py-2 px-6'>NEW CHAT</button>
           <div className='mt-2 px-2 border border-green-300 flex flex-col'>
               <div className='font-[Poppins] text-3xl items-center justify-center'>
                <h1>Chat History</h1>
               </div>
               <Link className='text-lg font-[Poppins] underline hover:text-green-600'>Active after payment made</Link>
               <Link className='text-lg font-[Poppins] underline hover:text-green-600'>Active after payment made</Link>
               <Link className='text-lg font-[Poppins] underline hover:text-green-600'>Active after payment made</Link>
               <Link className='text-lg font-[Poppins] underline hover:text-green-600'>Active after payment made</Link>
               <Link className='text-lg font-[Poppins] underline hover:text-green-600'>Active after payment made</Link>
           </div>
           <Link to={'/school'} className='bg-green-500 rounded-xl font-[Poppins] hover:bg-white hover:border hover:border-green-500 hover:text-black text-white mt-2 py-2 px-6'>Profile</Link>
        </div>
        <div className='w-[820px] h-[600px] border relative'>
           <div className="flex flex-col">
            <input type='text' placeholder='Type in your question and press enter...' className='top-90 border border-green-400 rounded-lg py-3 px-2 m-4 ' />
            <div className='bg-green-500 text-white rounded-lg py-3 px-2 m-4'>
                <p>Welcome to the {schooltype} schools Chatbot. Please ask questions related to {schooltype} materials</p>
            </div>
           </div>
        </div>

     </div>
      
    </>
  )
}

export default Schoolmain
