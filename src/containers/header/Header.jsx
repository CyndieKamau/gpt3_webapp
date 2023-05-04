import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import hand from '../../assets/virus.png';

const Header = () => {
  return (
    <div className='dna__header section__padding' id='home'>
      <div className='dna__header-content'>
        <h1 className='gradient__text'>
          Empowering African Scientists: Crowdfunding the Future of Research.          
        </h1>

        <p>
        Our decentralized funding platform connects innovative minds to the resources they need to push the boundaries of knowledge. <br/>
        
        Join us in empowering the next generation of African researchers.
        </p>

        <div className='dna__header-content__input'>
          <input placeholder='Your Email Address' type='email' />
          <button type='button'>Get Started</button>          
        </div>

        <div className='dna__header-content__people'>
          <img alt='people avatar' src={people}/> 
          <p>300 people viewed proposals</p>
        </div>

      </div>
      <div className='dna__header-content__image'>
          <img alt='hand holding leaf' src={hand} />
      </div>

      
    </div>
  )
}

export default Header
