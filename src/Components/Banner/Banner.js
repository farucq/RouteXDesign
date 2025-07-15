import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'

function Banner() {
  return (
    <div className='Banner align-items-center'>
      <div className='container text-center'>
        <div className='row justify-content-center'>
      <div className='mainHeading'>       
        <span>Journey  with Confidence</span> 
        <p><span className='subHeading'>Migrate</span> with Us</p>
      </div>
      <div className='overview'>
        <span>Lorem Ipsum has been the industry's standard printer e</span>
            <p> took a galley of type and scrambled</p> 
      </div>
      <div className='firstButton mt-2'>
      <button>Learn More →</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
