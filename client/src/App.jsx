import React, { useEffect, useState } from 'react';
import './index.css'
import axios from "axios";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  const [news, setNews] = useState([]);

  const filterNews = async (category) => {
    let link = "";
    if (category && category !== "everything") {
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=abdc75f243a645cd8fcf4bfd7f48016d`;
    } else {
      link = "https://newsapi.org/v2/top-headlines?country=us&apiKey=abdc75f243a645cd8fcf4bfd7f48016d";
    }
    const { data } = await axios.get(link);
    setNews(data.articles);
    console.log(data.articles)
  };

  useEffect(() => {
    filterNews();
  }, []);

  return (
    <>
      <Navbar />
      <Home news={news} />
      <Footer />
    </>
  )
}

export default App