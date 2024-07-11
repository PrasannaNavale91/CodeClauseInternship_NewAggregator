import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import axios from "axios";
import dotenv from "dotenv"; 
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

// mongodb connection
try{
  mongoose.connect(URI);
  console.log("Connected to database");
} catch (error) {
  console.log("Error: ", error);
}

app.use(cors());
app.use(express.json());

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  source: String,
  category: String
});

const News = mongoose.model('News', newsSchema);

app.get('/api/news', async (req, res) => {
  const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=abdc75f243a645cd8fcf4bfd7f48016d`);
  const articles = newsData.data.articles.map(article => ({
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    source: article.source.name,
    category: "general",  // Default category, you can customize it as needed
  }));

  await News.insertMany(articles, { ordered: false }).catch(err => console.log(err));

  res.json(articles);
});

app.get('/api/news/:category', async (req, res) => {
  const category = req.params.category;
  const news = await News.find({ category });
  res.json(news);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});