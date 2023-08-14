import React, { useState, useContext, useEffect } from 'react'
import Pnavbar from '../../components/Pnavbar'
import Peoplemain from '../../components/Peoplemain'
import { UserContext } from '../../UserContext'
import NotificationContext from '../../NotificationContext'


const Gov = () => {
    const {user, ready} = useContext(UserContext);
    const {notificationHandler} = useContext(NotificationContext);
    
    useEffect(()=>{
        if(!user && !ready){
            return;
        }      
    },[user, ready])
  return (
    <div>
      <Pnavbar />
      <Peoplemain peopletype={'Botswana'} />
    </div>
  )
}

export default Gov
