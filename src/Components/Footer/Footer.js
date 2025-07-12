import React from 'react'
import './Foooter.css'

function Footer() {
  return (
    <div className='footerMain'>
    <div className='footer'>
        <div className='routeX'>
            <div className='routexMain'>
            <div className='logo'>
                <img src='https://thumbs.dreamstime.com/b/airplane-logo-illustration-white-background-339249645.jpg' alt=''/>
            </div>   
            <div className='title'>    
                <h3>RouteX</h3>
            </div>
            </div>
            <div className='overview'>
                <p>Lorem Ipsum is simply dummy text of the printing and the text ever since the 1500s.</p>
                
            </div>
            <div className='icons'>
                <i className='bi bi-facebook'></i>
                <i className='bi bi-instagram'></i>
                <i className='bi bi-pinterest'></i>
                <i className='bi bi-linkedin'></i>
            </div>

        </div>
        <div className='serviceMenu'>
            <div className='title'>
                <span>Service Menu</span>
            </div>
            <div className='subTitle'>
                <p>✔️ Mistakes To Avoid<br/>
                ✔️ Your Startup<br/>
                ✔️ Knew About Fonts<br/>
                ✔️ Knew About Fonts</p>

            </div>
        </div>
        <div className='usefulLink'>
            <div className='title'>
                <span>Useful Link</span>
            </div>
            <div className='subTitle'>
                <p>✔️ Latest News<br/>
                ✔️ Careers<br/>
                ✔️ General Inquiries<br/>
                ✔️ Case Studies</p>

            </div>
            
        </div>
        <div className='gallery'>
            <div className='title'>
                <span>Gallery</span>
            </div>
            <div className='imageRow1'>
                <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1664474834472-6c7d1e3198e2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img src="https://www.openaccessgovernment.org/wp-content/uploads/2019/03/dreamstime_s_115214614.jpg" alt="" />
            </div>
            <div className='imageRow2'>
                <img src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149831305.jpg?semt=ais_hybrid&w=740" alt="" />
                <img src="https://thumbs.dreamstime.com/b/confused-customer-calling-support-service-smart-phone-office-116041961.jpg" alt="" />
                <img src="https://www.flexjobs.com/blog/wp-content/uploads/2020/09/30064933/successful-remote-workers.png" alt="" />
            </div>
        </div>
        </div>
        <div className='Line'>
        </div>
        <div className='footerBottom'>
            <span>©RRDevs2025 | All Rights Reserved</span>
            <div className='left'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
