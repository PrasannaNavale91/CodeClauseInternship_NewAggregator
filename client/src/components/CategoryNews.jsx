import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsList from './NewsList';

const CategoryNews = ({ match }) => {
    const [news, setNews] = useState([]);
    const category = match ? match.params.category : 'general';

    useEffect(() => {
        const fetchNews = async () => {
        const response = await axios.get(`http://localhost:8080/api/news/${category}`);
            setNews(response.data);
        };
        fetchNews();
    }, [category]);
  
    return <NewsList news={news} />;
}

export default CategoryNews