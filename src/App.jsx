import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import GridLoader from "react-spinners/GridLoader"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Register from './pages/Register'
import Login from './pages/Login'
import People from './pages/public/People'
import School from './pages/school/School'

import { UserContextProvider } from './UserContext'
import WelcomePage from './pages/WelcomePage'
import Notification from './utils/Notification'
import Primary from './pages/school/Primary'
import Secondary from './pages/school/Secondary'
import Senior from './pages/school/Senior'
import Gov from './pages/public/Gov'
import Phonebook from './pages/public/Phonebook'

const  App =()=> {

  axios.defaults.baseURL='http://localhost:3001'

  return (
   <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
         <Route index element={<WelcomePage />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/school' element={<School />} />
         <Route path='/public' element={<People />} />
         <Route path='/public/gov' element={<Gov />} />
         <Route path='/public/phonebook' element={<Phonebook />} />
         <Route path='/school/primary' element={<Primary />} />
         <Route path='/school/secondary' element={<Secondary />} />
         <Route path='/school/senior' element={<Senior />} />
         
      </Route>
    </Routes>
    <Notification />
   </UserContextProvider>
  )
}

export default App
