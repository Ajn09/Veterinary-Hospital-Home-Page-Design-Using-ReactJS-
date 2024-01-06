import React, {useState} from 'react'
import './navbar.scss'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
const Navbar = () => {
  const [active, setActive] = useState ('navBar')
  //function to toggle navBar
  const showNav =() => {
    setActive('navBar activeNavbar')}
      //function to close navBar
  const removeNavbar =() => {
    setActive('navBar removeNavbar')}
  return (
    <section className='navBarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href='#' className="LOGO FLEX">
          <h1>BluePet</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Products</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Services</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact us</a>
            </li>

            <button className='btn'>
              <a href='#'>Login</a>
            </button>

            <div onClick={removeNavbar}className="closeNavbar">
              <AiOutlineCloseCircle className="icon"/>
            </div>
           
          </ul>
        </div>

        <div onClick={showNav}className="toggleNavbar">
        <HiOutlineDotsHorizontal className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar