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
    let classes = 'bg-green-500 text-white rounded-full px-2';
    if(type === subpage){
       return classes;
    }
   }
  return (
    <>
      
        <div >
            <div className=' flex justify-around px-3 text-left gap-8 md:cursor-pointer'>
            <Link to={'/public/phonebook'} className={`${linkClasses('phonebook')} hover:border-b hover:border-green-500`} >Phonebook</Link> 
            <Link to={'/public/gov'} className={`${linkClasses('gov')} hover:border-b hover:border-green-500`} >Public Stuff</Link>
            
            </div>
        </div>
     
    </>
  )
}

export default Pnavbarlinks
