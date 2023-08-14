import React,{useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { UserContext } from '../../UserContext'
import NotificationContext from '../../NotificationContext'

const School = () => {
  const {user, ready} = useContext(UserContext);
  const {notificationHandler} = useContext(NotificationContext);
  
  useEffect(()=>{
    if(!user){
      return;
    }

  },[user]);

  return (
    <div>
      <section className="h-screen md:bg-top font-[Poppins]">
        <Navbar />
        <div className="mt-3 px-6 py-4 flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">
              Payment coming soon...free for now
            </h1>
        </div>
      </section>
    </div>
  )
}

export default School
