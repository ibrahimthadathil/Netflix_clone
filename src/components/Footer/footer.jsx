import React from 'react'
import './footer.css'
import Youtube from '../../assets/assets/youtube_icon.png'
import twitter from '../../assets/assets/twitter_icon.png'
import instagram from '../../assets/assets/instagram_icon.png'
import facebook from '../../assets/assets/facebook_icon.png'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={Youtube} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Center</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookies Preferences</li>
        <li>Corporate informations</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-Text'> ©️ 2010 -2024 Netflix,inc.</p>
    </div>
  )
}

export default footer
