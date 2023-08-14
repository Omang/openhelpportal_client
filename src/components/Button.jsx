import React, {useState, useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import NotificationContext from '../NotificationContext';
import { UserContext } from '../UserContext';

const Button = () => {

    const [redirect, setRedirect] = useState(null);
    const {setReady, user, setUser} = useContext(UserContext);
    const {notificationHandler} = useContext(NotificationContext);
  

    const logout = ()=>{

       notificationHandler({type:'warning', message:'Logout success...Next time'});
       console.log('logout success');
       setUser(null);
       setReady(false);
       setRedirect('/login');
       
    }

    if(redirect){
       return <Navigate to={redirect} />
    }

  return (
    <button onClick={logout} className='bg-red-500 hover:border hover:bg-white hover:text-black hover:border-red-500 text-white px-6 py-2 rounded-full'>
      Sign out
    </button>
  )
}

export default Button
