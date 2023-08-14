import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Schoolmain from '../../components/Schoolmain'
import { UserContext } from '../../UserContext'
import NotificationContext from '../../NotificationContext'

const Primary = () => {
    const[primary, setPrimary] = useState({
       message: 'me about everything',
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
       <Schoolmain schooltype={'Primary'} />
    </div>
  )
}

export default Primary
