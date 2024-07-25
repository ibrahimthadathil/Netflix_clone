import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/assets/logo.png'
import { login,signup,logout } from '../../firebase'
import spinner from '../../assets/assets/netflix_spinner.gif'
const Login = () => {
const [SignState,setSign]=useState('Sign In')
const [name,setname]=useState('')
const [email,setemail]=useState('')
const [paswword,setpasww]=useState('')
const [loading,setloading] = useState(false)

const  user_auth = async (event)=>{
  event.preventDefault()
  setloading(true)
  if(SignState==='Sign In'){
    await login(email,paswword)
    setemail('')
    setpasww('')
    
  }else{
    await signup(name,email,paswword)
    
  }
  setloading(false)
}

  return (
   loading ? <div className="loagi-spinner">
      <img src={spinner} alt="" />
    </div> :

    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1 style={{textAlign:"center"}}>{SignState}</h1>
        <form action="">
          {SignState==="Sign Up"?<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Your name' />:<></>}
          <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  placeholder='Your email' />
          <input type="password"value={paswword} onChange={(e)=>{setpasww(e.target.value)}}  placeholder='Your password' />
          <button onClick={user_auth} type='submit'>{SignState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=" ">remember Me</label>
            </div>
            <p>Need Help?..</p>
          </div>
        </form>
        <div className="formswitch" style={{textAlign:'center'}}>
          {SignState==='Sign In'?<p>New to Netflix? <span onClick={()=>setSign("Sign Up")}>Sign Up Now</span></p>:<p>Already have an account<span onClick={()=>setSign("Sign In")}>Sign In Now</span></p>}
          
        </div>
      </div>
    </div>
  )
}

export default Login
