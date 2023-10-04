import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { GridLoader } from 'react-spinners';

const Peoplemain = ({peopletype}) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const searchitem = async(e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      setResult([]);
      const {data} = await axios.post('/ai/school', {
        question: search
      })
      if(data.message !== ''){
        setLoading(false);
        console.log(data.message);
        setResult(prev=>[...prev, data.message])
        setSearch('')

      }else{
        setLoading(false);
        setResult(prev=>[...prev, 'Only contacts related query is asked! sorry'])
        setSearch('')
      }

    }catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  const clearfield = (e)=>{
    e.preventDefault();
    setResult([]);
    return;
  }

  return (
  <>
    <div className='xs:mt-32 my-4 mx-4 px-4 py-4 flex flex-col justify-center items-center '>
        
        <div className='border w-[600px]'>
           <div className="flex flex-col" >

           {loading ? <GridLoader color={'#7ED321'} loading={loading} size={5} /> : <>
           
           {result ? <>
            {result.map(item=>(

<div key={item} className='bg-gray-400 text-white rounded-lg py-3 px-2 m-4'>
<TypeAnimation
sequence={[
// Same substring at the start will only be typed out once, initially
`${item}`,
1000
]}
wrapper="span"
speed={50}
style={{ fontSize: '2em', display: 'inline-block' }}
repeat={Infinity}
cursor={false}
/> 
<button onClick={clearfield} className='bg-gray-500 text-white hover:bg-gray-200 hover:text-black px-3 m-4'>Clear</button>
</div>
              
            ))}
              
           </>: <>

           <div className='bg-gray-400 text-white rounded-lg py-3 px-2 m-4'>
                <p>Welcome to {peopletype} Chatbot. Please query contacts on the {peopletype}</p>
            </div>
           
           </>}
           
           </>}
            
          

           <form  className="flex flex-col" onSubmit={searchitem}>
            <input type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Type in your query and press enter...' 
            className=' border border-gray-400 rounded-lg py-3 px-2 m-4 ' />
            </form>
            <div className='bg-gray-100 flex flex-col'>
                 <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-xl text-red-500'>How to ask for better results hints</h1>
                 </div>
                 <p className='px-4 m-2 text-xs text-red-500'>I want contact number for ministry of Education or </p>
                 <p className='px-4 m-2 text-xs text-red-500'>I need contact number for ministry of Education or</p>
                 <p className='px-4 m-2 text-xs text-red-500'>I want contact number for ministry of Education offices at Gaborone or</p>

                 <p className='px-4 m-2 text-xs text-red-500'>What are contact number for ministry of Education offices at Gaborone or</p>
                 <p className='px-4 m-2 text-xs text-red-500'>ministry of Education offices at Gaborone contact information </p>
            </div>
           </div>
        </div>

     </div>
      
      
    </>
  )
}

export default Peoplemain
