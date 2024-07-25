import React, { useEffect } from 'react'
import Home from './pages/Home/home.jsx'
import Login from './pages/Login/login.jsx'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { toast } from 'sonner'
const App = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log('logged in');
        toast.success('successfully Logged In ')
        navigate('/')
      }else{
        console.log('logged out');
        navigate('/login')
      }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player />}/>

        
      </Routes>
      
    </div>
  )
}

export default App
