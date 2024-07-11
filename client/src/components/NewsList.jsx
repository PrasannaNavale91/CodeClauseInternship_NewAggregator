import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NewsList = ({ news }) => {

  return (
    <div className="flex flex-wrap justify-center">
      {news.map((article, index) => (
        <div key={index} className="md:w-[750px] w-[300px] p-5 m-2.5 border rounde-lg">
          { article.urlToImage && 
            <LazyLoadImage
              src={article.urlToImage}
              alt={article.title}
              className='w-full h-auto object-cover'
              effect='blur'
            />
          }
          <h2 className='text-xl font-bold py-2'>{article.title}</h2>
          <p className='text-lg py-3'>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className='font-bold hover:text-red-400'>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;