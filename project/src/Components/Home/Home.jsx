import React, {useEffect, useState} from 'react'
import './home.scss'
import video from '../../Assets/video.mp4'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import {FaRegAddressCard} from 'react-icons/fa'
import {BsCalendar2Date} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {BsListNested} from 'react-icons/bs'
import axios from 'axios'

import Aos from 'aos'
import 'aos/dist/aos.css'



function Home() {
useEffect(() => {
  Aos.init({duration:2000})
},[])
   
  const [name,setName] = useState("")
  const [date,setDate] = useState("")
  const [contactno,setContactno] = useState("")
  const [address,setAddress] = useState("")

const getappointment = () => {
  axios.post('http://localhost:3001/create',{
    name:name,
    date:date,
    contactno:contactno,
    address:address
  }).then(()=>console.log('success'))
}

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up"
          className="smallText">Pets Are Better Than Humans.
          </span> 

          <h1  data-aos="fade-up"
          className="home title">
            Our Best Services.
          </h1>
        </div>
        

        <div type="text"><h2 className="home title">Get Your Appointment Here</h2></div>
          
        <div  data-aos="fade-up"
         className="cardDiv grid">
          
          <div className="Name Input">
            <form  onSubmit={console.log(name)}></form>
            <label> Name </label>
            <div className="input flex">
              <input type="text" name="name" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}></input>
              <BiUserCircle className="icon"/>
            </div>
          </div>

          <div className="Date Input">
          <label>Date</label>
            <div className="input flex">
              <input type="Date" name="date" placeholder='Select Your Appointment Date' onChange={(e) => setDate(e.target.value)}></input>
              <BsCalendar2Date className="icon"/>
            </div>
          </div>

          <div className="Contactno Input">
          <label>Contact No.</label>
            <div className="input flex">
              <input type="text" name="contactno" placeholder='Enter Your Contact No.' onChange={(e) => setContactno(e.target.value)}></input>
              <AiOutlinePhone className="icon"/>
            </div>
          </div>

          <div className="Address Input">
          <label>Address</label>
            <div className="input flex">
              <input type="text" name="address" placeholder='Enter Your Address' onChange={(e) => setAddress(e.target.value)}></input>
              <FaRegAddressCard className="icon"/>
            </div>
          </div>

          <div className="Animal">
          <label>Animal</label>
            <div className="input flex">
              <input type="text" name="animal" placeholder='Enter Your Animal' onChange={(e) => setAddress(e.target.value)}></input>
              <FaRegAddressCard className="icon"/>
            </div>
          </div>

          
          <button type="submit" className='btn'>
            
           Get Appointment
          </button>
        </div>

        <div data-aos="fade-up" className="homeFootercons flex">
          <div className="rightIcons"><BsFacebook className="icons"/>
          <AiFillInstagram className="icons"/>
          <AiFillYoutube className="icons"/>
          </div>
          <div className='leftIcons'>
          <BsListNested className="icons"/>
          
          </div>
        </div>
      </div>
      </section>
  )
}

export default Home