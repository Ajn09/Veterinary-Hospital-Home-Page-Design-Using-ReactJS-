import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
   
    <div className='secContent container'>
      <div className='contactDiv flex'>
        <div data-aos="fade-up" className='text'>
        <small>KEEP IN TOUCH</small> 
        <h2>Get Veterinary Services</h2>
        </div>
        <div className='inputDiv flex'>
          <input data-aos="fade-up" type='text' placeholder='Enter Email Address' />
          <button data-aos="fade-up" className='btn flex' type='submit'>
            SEND <FiSend className="icon" />
          </button>

          <div data-aos="fade-up" className='text'>
          <h3>Mobile No.</h3>
          <h4><a href="#" className="mob">0776235065 </a></h4>
          <span>   </span>
          <h3>Mail Address</h3>
          <h4><a href="#" className="mob">Bluepet@gmail.com</a></h4>
        
        </div>
        </div>
      </div>

      <div data-aos="fade-up" className="footerCard flex">
        <div className="footerIntro flex">
         <div className="logoDiv">
          <a href="#" className='logo flex'>
            BluePet
          </a>
         </div>
         <div data-aos="fade-up" className="footerParagraph">
         "At Bluepet Veterinary Hospital, we're dedicated to the well-being of your cherished companions. Our experienced team of veterinarians and staff is here to provide top-notch care and support for your pets. Whether it's preventive health, specialized treatments, or emergency services, we're your trusted partner in ensuring your pets lead happy, healthy lives. We value the bond you share with your furry friends, and we're committed to nurturing it. Thank you for choosing us as your pet's healthcare destination. Your pets, our passion."
         </div>

         <div data-aos="fade-up" className="footerSocials">
          <AiOutlineTwitter className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          
         </div>

         <div data-aos="fade-up" className="footerDiv flex">
          <small> We Give Best Services</small>
          <small> COPYRIGHTS RESERVED</small>
         </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer


