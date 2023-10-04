import React from 'react'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col md:p-8 p-4 md:mx-auto mx-4  '>
       <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="md:text-3xl text-2xl font-bold text-green-500">
            Open Help Portal
        </h1>
        <p className="md:text-lg text-sm text-gray-400">
          Smart Guide  
        </p>
        
    </div>
      <Outlet />
      <p className="md:text-lg text-sm mt-16 mb-2 px-8 text-gray-400">
          Email us: sales@manwishinvestments.co.bw or Call: +267 73725320  
        </p>
    </div>
  )
}

export default Layout
