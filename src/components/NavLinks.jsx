import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

const NavLinks = () => {
    const {pathname} = useLocation();
   //console.log(pathname);
   let subpage = pathname.split('/')?.[2];
   if(subpage === undefined){
    subpage = 'school';
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
            <Link to={'/school/primary'} className={`${linkClasses('primary')} hover:border-b hover:border-green-500`} >Primary</Link> 
            <Link to={'/school/secondary'} className={`${linkClasses('secondary')} hover:border-b hover:border-green-500`} >Secondary</Link>
            <Link to={'/school/senior'} className={`${linkClasses('senior')} hover:border-b hover:border-green-500`} >Senior</Link>
            </div>
        </div>
     
    </>
  )
}

export default NavLinks
