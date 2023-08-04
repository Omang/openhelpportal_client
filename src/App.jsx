import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import GridLoader from "react-spinners/GridLoader"
import { CopyToClipboard } from 'react-copy-to-clipboard'


function App() {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  const [copy, setCopy] = useState({
    value: '',
    copied: false
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit= async(e)=>{
  
    e.preventDefault();
    setLoading(true);
    setCopy({
      value: '',
      copied: false
    });
const options = {
  method: 'POST',
  url: 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '5c0c883516mshdfcbd16fd2275cap19bdc4jsn2387add7be7d',
    'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
  },
  data: {
    url: input,
    min_length: 100,
    max_length: 300,
    is_detailed: false
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  setLoading(false);
  setInput('');
  setData(response.data);
} catch (error) {
  setLoading(false);
	console.error(error);
}
  }
  return (
    <>
      <div className='px-4 mx-2 mt-2 flex flex-col'>
        <div className='flex flex-col mb-3 justify-center items-center'>
           
           <h1 className='text-green-600 font-semibold md:text-3xl'>OPEN HELP PORTAL</h1>
           <p className='text-sm font-light text-gray-400'>Summarise any article from the web</p>
        
           
        <div className='mt-8'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)} 
            className='border md:h-[50px] h-[40px] w-[320px] md:w-[720px] max-w-4xl rounded-md mx-auto  border-green-500 shadow-lg px-2'
             placeholder='Paste an article url/link and press enter' />
        </form>
        </div>
        {loading &&(
          <div className='mt-4'>
              <GridLoader color={'#7FFFD4'} loading={loading} size={20} />
          </div>
        )}
        {data &&(
          <div className='flex flex-col md:mx-32 mt-4 mx-4 p-2 border rounded-sm border-green-500'>
           <div className='flex flex-row justify-between'>
           <CopyToClipboard text={data.summary}
          onCopy={() =>setCopy({copied: true})}>
          <button className='bg-green-600 px-2 text-white border rounded-full hover:bg-green-300 hover:text-black'>Copy</button>
        </CopyToClipboard>
        {copy.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            <button onClick={()=>setData('')} className='bg-green-600 px-2 text-white border rounded-full hover:bg-green-300 hover:text-black'>Clear data</button>
           </div>
          <p className='text-xl mt-2 mx-1 text-gray-700 font-thin'>{data.summary}</p>
       </div>
        )}
       </div>
      </div>
    
    </>
  )
}

export default App
