import { useEffect, useState } from "react";
import { getAllNews } from "../../services/newsService.jsx";

export const News = () => {
  const [allNews, setAllNews] = useState([]);

  // useEffect to fetch news and set to allNews on initial render

  useEffect(() => {
    getAllNews().then((newsArray) => {
      setAllNews(newsArray);
      console.log("News set!");
    });
  }, []);

  return (
    <>
      {allNews.map((news) => {
        return (
          <div className="card" key={news.id}>
            <div className="card-body">
              <a href={news.url}>
                <h5 className="card-title">{news.title}</h5>
              </a>
              <p className="card-text">{news.synopsis}</p>
              <p className="card-text">
                <small className="text-body-secondary">like | comment</small>
              </p>
            </div>
            {news.img !== "" && <img src={news.img} className="card-img-bottom" />}
          </div>
        );
      })}
    </>
  );
};
