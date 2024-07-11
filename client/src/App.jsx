import React, { useEffect, useState } from 'react';
import './index.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import CategoryNews from './components/CategoryNews';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const fetchNews = async () => {
      const response = await axios.get('http://localhost:8080/api/news');
      setNews(response.data);
    };
    fetchNews();
  }, []);
  return (
    <>
      <BrowserRouter>
        <div className="p-6">
          <h1 className='text-3xl py-3 uppercase tracking-wide text-center'>News Aggregator</h1>
          <nav className='flex justify-center'>
            <Link to="/category/general" className='m-2.5 border rounded-md px-2 no-underline hover:bg-red-600 hover:text-white hover:border-0 duration-300'>General</Link>
            <Link to="/category/business" className='m-2.5 border rounded-md px-2 no-underline hover:bg-red-600 hover:text-white hover:border-0 duration-300'>Business</Link>
            <Link to="/category/technology" className='m-2.5 border rounded-md px-2 no-underline hover:bg-red-600 hover:text-white hover:border-0 duration-300'>Technology</Link>
          </nav>
          <Routes>
            <Route path="/" element={<CategoryNews category="general" />} />
            <Route path="/category/:category" component={CategoryNews} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App