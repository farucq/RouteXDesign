import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='brandName'>
        <img src='https://thumbs.dreamstime.com/b/airplane-logo-illustration-white-background-339249645.jpg'/>
        <span>RouteX</span>
      </div>
      <div className='actions'>
        <span className='home'>HOME▾</span>
        <span className='about'>ABOUT US</span>
        <span className='story'>STORY▾</span>
        <span className='visa'>VISA▾</span>
        <span className='blog'>BLOG▾ </span>
        <span className='page'>PAGE▾</span>
        <span className='contact'>CONTACT</span>
      </div>
      
      <div className='help'>
        <div className='helpImg'>
          <img src='https://cdn-icons-png.flaticon.com/512/6072/6072846.png'/>
        </div>
        <div className='helpContact'>
          <span className='needHelp'>Need help?</span><br/>
          <span >9072028649</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
