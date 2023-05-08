import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='dna__whatqwame section__margin' id='whatqwame'>
      <div className='dna__whatqwame-features'>
        <Feature title='What is Qwame?' text="Qwame is the next frontier for decentralized science.Join us in empowering the next generation of African researchers, as we work together to solve the continent's most pressing health challenges and create a brighter future for all."/>
      </div>
      <div className='dna__whatqwame-heading'>
        <h1 className='gradient__text'> Connecting African Research through Decentralized Science.</h1>
        <p>Explore the Library.</p>
      </div>
      <div className='dna__whatqwame-container'>
        <Feature title='Crowdfunding' text='Qwame aims to uplift scientists in Africa by simplifying their access to funding and grants'/>
        <Feature title='Pan African' text='Qwame connects the communities to ongoing projects, where they can contribute to them.' />
        <Feature title='Transparency' text='Qwame utilizes blockchain technology to promote transparency for managing funds and collaboration amongst scientists.'/>       
      </div>
    </div>
  )
}

export default WhatGPT3
