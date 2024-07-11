import React from 'react'
import Card from './Card'

const Home = ({ news }) => {
  return (
    <div className='home'>
        {
          news && news.map(element=>{
            return(
              <Card key={element.url}
                    title={element.title}
                    content={element.content}
                    author={element.author}
                    publishedAt = {element.publishedAt}
                    url={element.url}
                    urlToImage={element.urlToImage}
                    altImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png"}
              
              
              />
            )
          })
        }
    </div>
  )
}

export default Home