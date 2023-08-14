import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Schoolmain from '../../components/Schoolmain'
import { UserContext } from '../../UserContext'
import NotificationContext from '../../NotificationContext'


const Secondary = () => {
    const [sec, setSec] = useState({
        message: 'me about everything at secondary',
        answer: 'that is the truth' 
     })
     const {user, ready} = useContext(UserContext);
    const {notificationHandler} = useContext(NotificationContext);
    
    useEffect(()=>{
        if(!user && !ready){
            return;
        }      
    },[user, ready])
  return (
    <div>
        <Navbar />
      <Schoolmain schooltype={'Secondary'} />
    </div>
  )
}

export default Secondary
