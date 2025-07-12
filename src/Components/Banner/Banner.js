import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'

function Banner() {
  return (
    <div className='Banner'>
    <div className='Banner1'>
      <div className='mainHeading'>       
        <span>Journey  with Confidence</span> 
        <p><span className='subHeading'>Migrate</span> with Us</p>
      </div>
      <div className='overview'>
        <span>Lorem Ipsum has been the industry's standard printer e</span>
            <p> took a galley of type and scrambled</p> 
      </div>
      <div className='firstButton'>
      <button>Learn More →</button>
      </div>
      </div>
    </div>
  )
}

export default Banner
