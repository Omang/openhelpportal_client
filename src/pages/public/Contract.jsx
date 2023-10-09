import React, { useState, useContext, useEffect } from 'react'
import Pnavbar from '../../components/Pnavbar'
import Contractmain from '../../components/Contractmain'
import { UserContext } from '../../UserContext'
import NotificationContext from '../../NotificationContext'
import { TypeAnimation } from 'react-type-animation';


const Contract = () => {
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
      <Contractmain peopletype={'Phonebook'} />
    </div>
  )
}

export default Contract
