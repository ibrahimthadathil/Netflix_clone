import React, { useEffect, useRef } from 'react'
import logo from '../../assets/assets/logo.png'
import search from '../../assets/assets/search_icon.svg'
import bell from '../../assets/assets/bell_icon.svg'
import profile from '../../assets/assets/profile_img.png'
import cret_ico from '../../assets/assets/caret_icon.svg'
import  './navbar.css'
import { logout } from '../../firebase'
const navbar = () => {
  const navRef =useRef()
  useEffect(()=>{
    window.addEventListener('scroll',(()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    }))
  })
  return (
    <div ref={navRef}className='navbar'>
      <div className="navbar_left">
        <img src={logo} alt="Netflix_Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By language</li>
        </ul>
      </div>
      <div className="navbar_right">
         <img src={search} alt="" className='icons'/>
         <p>children</p>
         <img src={bell} alt="" className='icons'/>
         <div className="van_profile">
            <img src={profile} alt="" className='profile'/>
            <img src={cret_ico} alt="" className=''/>
            <div className="dropdown">
              <p onClick={()=>{logout()}}>Sign Out of Netflix </p>
            </div>

         </div>
      </div>
    </div>
  )
}

export default navbar
