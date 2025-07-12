
import React from 'react'
import './Banner3.css'

function Banner3() {
  return (
    <div className='Banner3'>

        <div className='bannerSub'>

            <div className='subTitle'>
                <span>OUR SERVICES 🛠️</span>
            </div>
            <div className='subsubTitle'>
                <div className='title'>
                    <span>Adventure Unleashed <br/>Discover Your Next</span>
                </div>
                <div className='arrow'>
                        <button className='btn'><span>←</span></button>
                        <button className='btn'><span>→</span></button>
                </div>
            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='img'>
                        <img src="https://img.freepik.com/premium-vector/earth-globe-illustration-brown-background_53876-480673.jpg?w=360" alt="logo" />
                    </div>
                    <div className='cardTitle'>
                        <h2>Food And Wine Tours</h2>
                    </div>
                    <div className='overview'>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been scrambled it to make a type specimen book.</h4>
                    </div>
                </div>

                <div className='card'>
                    <div className='img'>
                        <img src="https://i.pinimg.com/736x/32/21/7a/32217a8528c31a0b5798b9eec0140ac4.jpg" alt="logo" />
                    </div>
                    <div className='cardTitle'>
                        <h2>Travel Opportunities</h2>
                    </div>
                    <div className='overview'>
                        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                    </div>
                </div>

                <div className='card'>
                    <div className='img'>
                        <img src="https://i.pinimg.com/736x/13/8d/34/138d34f2c734c1758a2a232928419ad5.jpg" alt="logo" />
                    </div>
                    <div className='cardTitle'>
                        <h2>Solo Travel Planning</h2>
                    </div>
                    <div className='overview'>
                        <h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h4>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner3
