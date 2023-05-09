import React from 'react';
import './article.css';

const Article = ( {imgUrl, date, title}   ) => {
  return (
    <div className='dna__blog-container_article'>
      <div className='dna__blog-container_article-image'>
        <img src={imgUrl} alt='article ' />
      </div>
      <div className='dna__blog-container_article-content'>
        <div>
        <p>{date}</p>  
        <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
        <div className='dna__blog-container_article-content_fund'>
          <button type='button'>Fund Project</button>
        </div>
      </div>
    </div>
  )
}

export default Article
