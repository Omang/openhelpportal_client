import React, { useState, useContext } from 'react'
import {Link, Navigate} from 'react-router-dom';
import { UserContext } from '../UserContext';
import NotificationContext from '../NotificationContext';
import { GridLoader } from 'react-spinners';
import axios from 'axios';

const Login = () => {
  const [mobilenum, setMobilenum] = useState('');
  const [pass, Setpass] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [err, setErr] = useState('');
  const {setUser, setReady} = useContext(UserContext);
  const {notificationHandler} = useContext(NotificationContext);

  const loginuser = async(e)=>{
    e.preventDefault();
    setLoading(true);
     setErr('');
    try{
       console.log({mobilenumber: mobilenum, password: pass})
      const {data} =await axios.post('/user/login', {mobilenumber: `+267${mobilenum}` , password: pass})
      console.log(data);
      if(data?.message){
          setLoading(false);
          setErr(data?.message);
      }else{

        setLoading(false);
        setUser(data);
        setReady(true);
        notificationHandler({type:'success', message:'Login success...Welcome client'});
        if(data.role === 'student'){
              setRedirect('/school');
        }else{
              setRedirect('/public');
        }

      }
       
    }catch(error){
      setLoading(false);
      console.log(error);
      setErr('Something bad happend! try again');
    }
  }
  if(redirect){
    return <Navigate to={redirect} />
  }
  return (
    <div className=' flex items-center justify-center mt-8'>
      <div className=' border border-gray-500 rounded-2xl shadow-2xl w-[400px]'>
      <div className='flex flex-col justify-center items-center'>

<h1 className='text-lg text-gray-500'>Login</h1>
</div>
        {err && (<p className='ml-4 text-sm text-red-500 font-bold uppercase'>
          wrong Password / Phonenumber
        </p>)}
        {loading ? <GridLoader color={'#7ED321'} loading={loading} size={30} /> : <form className='flex flex-col p-2' onSubmit={loginuser}>
           <input type="number" placeholder='Enter your Mobile Number' required value={mobilenum} onChange={e=>setMobilenum(e.target.value)} className='border-b border-gray-500 rounded-full m-3 px-3' />
           <input type="password" placeholder='Your password' required value={pass} onChange={e=>Setpass(e.target.value)} className='border-b border-gray-500 rounded-full m-3 px-3' />
           <div className="flex flex-row justify-between">
            <Link className='underline hover:text-gray-600 text-red-600' to={'/'}>Go Back</Link>
           <button type='submit' className='border rounded-full px-3 hover:text-white bg-gray-500'>Login</button>
           <Link className='underline hover:text-gray-600 text-red-600' to={'/register'}>New account</Link>
           </div>
        </form>}
      </div>
    </div>
  )
}

export default Login
