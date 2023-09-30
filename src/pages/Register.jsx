import axios from 'axios';
import React, { useState, useContext } from 'react'
import {Link, Navigate} from 'react-router-dom'
import { GridLoader } from 'react-spinners';
import NotificationContext from '../NotificationContext';

const Register = () => {
  const [mobile, setMobile] =useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading , setLoading] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState('');
  const [exist, setExist] = useState('');
  const {notificationHandler} = useContext(NotificationContext);
  const [code, setCode] = useState(false);
  const [sendcode, setSendcode] = useState('');
  const [sid, setSid] = useState('');

  const onchangeHandler=(e)=>{

    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const option =  el.getAttribute('id');
    setRole(option);
    console.log(option);

}

const registeruser = async(e)=>{
  e.preventDefault();
 
  try{
    setLoading(true);
    const {data} = await axios.post('/user/sendcode', {
      mobilenumber: `+267${mobile}`
    });
    setLoading(false);
    if(data.verify.status){
      setCode(true);
      setSid(data.service_sid);

    }else if(data.numberWrong){
       setError('Number not valid');
    }else{

      setError('Something bad happend, try again later.');

    }

  }catch(err){
    setLoading(false);
    console.log(err);
  }
    
}
const submitcode = async(e)=>{
  e.preventDefault();
  try{
     setLoading(true);
    const {data} = await axios.post('/user/verifycode', {
      sentcode: sendcode,
      sid: sid,
      mobilenumber: `+267${mobile}`,
      password: password

    })

    setLoading(false);

    if(data.message){

       setLoading(false);
       notificationHandler({type:'success', message:'Registration Successful'});
       setRedirect('/login');

    }else if(data.userexist){

      setCode(false);
      setExist(data.userexist);
       notificationHandler({type:'warning', message:'User exists! please log..'});

    }else{
      setError('Wrong Code, Please enter a code sent to your number.')
    }

  }catch(err){
    setLoading(false);
    console.log(err);
  }
}
if(redirect){
  return <Navigate to={redirect} />
}

  return (
    <div className=' flex items-center justify-center mt-8'>
      <div className=' border border-gray-500 rounded-2xl shadow-2xl w-[400px]'>
        <div className='flex flex-col justify-center items-center'>

        <h1 className='text-lg text-gray-500'>Register</h1>
        <p className='text-sm text-gray-red underline'>Botswana mobile numbers only</p>

        </div>
        {loading ? <GridLoader color={'#7ED321'} loading={loading} size={20} /> : <> <form className='flex flex-col p-2' onSubmit={registeruser}>
           {error &&(
            <p className='px-5 text-sm text-red-500 font-bold'>{error}</p>
           )}
           {exist &&(
            <p className='px-1 text-sm text-yellow-500 font-bold'>User exists! please login</p>
           )}
           <input required type="number" value={mobile} onChange={e=>setMobile(e.target.value)} placeholder='Your mobilenumber like 71111111' className='border-b border-gray-500 rounded-full m-3 px-3' />
           <input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter password' className='border-b border-gray-500 rounded-full m-3 px-3' />
            
           <div className="flex flex-row justify-between">
            <Link className='underline hover:text-gray-600 text-red-600' to={'/'}>Go Back</Link>
           <button type='submit' className='border rounded-full px-3 hover:text-white bg-gray-500'>Register</button>
           <Link className='underline hover:text-gray-600 text-red-600' to={'/login'}>Login</Link>
           </div>
        </form>

        {code && (
          <>
          <form className='flex flex-col p-2' onSubmit={submitcode}>
          <input required type="number" value={sendcode} onChange={e=>setSendcode(e.target.value)} placeholder='Enter Code sent to your number' className='border-b border-gray-500 rounded-full m-3 px-3' />
          <button type='submit' className='border rounded-full px-3 hover:text-white bg-gray-500'>Register</button>
          </form>
          </>
        )}
        
        </>}
      </div>
    </div>
  )
}

export default Register
