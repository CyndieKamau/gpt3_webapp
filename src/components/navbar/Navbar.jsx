import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
//import logo from '../../assets/logosm.png'
import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='dna__navbar'>
      <div className='dna__navbar-links'>
        <div className='dna__navbar-links_logo'>
          
        </div>
        <div className='dna__navbar-links_container'>
          <p><a href='#home'> Home </a></p>
          <p><a href='#whatGPT3'> About </a></p>
          <p><a href='#features'> Submit Project </a></p>
          <p><a href='#possibility'> Case Studies </a></p>
          <p><a href='#blog'> Library </a></p>
        </div>
      </div>
      <div>
        <div className='dna__navbar-sign_in'>
          <p>Sign In</p>
          <button type='button'>Sign Up </button>
        </div>
        <div className='dna__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='dna__navbar-menu_container scale-up-center'>
            <div className='dna__navbar-menu_container-links'>
              <p><a href='#home'> Home </a></p>
              <p><a href='#whatGPT3'> About </a></p>
              <p><a href='#features'> Submit Project </a></p>
              <p><a href='#possibility'> Case Studies </a></p>
              <p><a href='#blog'> Library </a></p>
            </div>

            <div className='dna__navbar-menu_container-links-sign_in'>
              <p>Sign In</p>
              <button type='button'>Sign Up </button>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  )
}

export default Navbar
