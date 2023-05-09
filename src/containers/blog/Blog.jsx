import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {covid, cows, baby1, plants, hand} from './imports';

const Blog = () => {
  return (
    <div className='dna__blog section__padding' id='blog'>
      <div className='dna__blog-heading'>
        <h1 className='gradient__text'>View the following submissions</h1>
      </div>
      <div className='dna__blog-container'>
        <div className='dna__blog-container_group-a'>
          <Article imgUrl={plants} date='5th May 2023' title='Plants are healthy' />
        </div>

        <div className='dna__blog-container_group-b'>
          <Article imgUrl={cows} date='1st May 2023' title='Cows for Life'/>
          <Article imgUrl={baby1} date='28th April 2023' title='Babies are good' />
          <Article imgUrl={covid} date='25th April 2023' title='Covid 19' />
          <Article imgUrl={hand} date='20th April 2023' title='Hands are life' />
        </div>
      </div>
    </div>
  )
}

export default Blog
