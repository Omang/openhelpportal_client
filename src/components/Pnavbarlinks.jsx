import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

const Pnavbarlinks = () => {
    const {pathname} = useLocation();
   //console.log(pathname);
   let subpage = pathname.split('/')?.[2];
   if(subpage === undefined){
    subpage = 'people';
   }

   const linkClasses = (type=null)=>{
    let classes = 'bg-gray-500 text-white rounded-full px-2';
    if(type === subpage){
       return classes;
    }
   }
  return (
    <>
      
        <div >
            <div className=' flex justify-around px-3 text-left gap-8 md:cursor-pointer'>
            <Link to={'/public/phonebook'} className={`${linkClasses('phonebook')} hover:border-b hover:border-gray-500`} >Phonebook</Link>
            <Link to={'/public/contract'} className={`${linkClasses('contract')} hover:border-b hover:border-gray-500`} >SmartContract</Link>
            </div>
        </div>
     
    </>
  )
}

export default Pnavbarlinks
