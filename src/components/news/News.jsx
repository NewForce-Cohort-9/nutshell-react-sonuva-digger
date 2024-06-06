import "./News.css";
import { useEffect, useState } from "react";
import { getAllNews, getSavedNews } from "../../services/newsService.jsx";

export const News = ({ currentUser }) => {
  const [allNews, setAllNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);

  // useEffect to fetch news and set to allNews on initial render

  useEffect(() => {
    getAllNews().then((newsArray) => {
      setAllNews(newsArray);
      console.log("News set!");
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      getSavedNews(currentUser.id).then((savedNewsArray) => {
        setSavedNews(savedNewsArray);
        console.log("Saved news set!");
      });
    }
  }, [currentUser]);

  return (
    <section className="newsFlex">
      <article className="allNews">
        <h2 className="subheading">All News</h2>
        {allNews.map((news) => {
          return (
            <div className="card m-3 mw-100" key={news.id}>
              <div className="card-body">
                <a href={news.url}>
                  <h5 className="card-title">{news.title} {news?.user?.name}</h5>
                </a>
                <p className="card-text">{news.synopsis}</p>
                <p className="card-text">
                  <small className="text-body-secondary">like | comment</small>
                </p>
              </div>
              {news.img !== "" && (
                <img src={news.img} className="card-img-bottom" />
              )}
            </div>
          );
        })}
      </article>
      <div className="savedNewsBox">
        <article className="allNews">
          <h2 className="subheading">Saved Articles</h2>
          {savedNews.map((saved) => {
            return (
              <div className="card m-3 mw-100" key={saved?.news?.id}>
                <div className="card-body">
                  <a href={saved?.news?.url}>
                    <h5 className="card-title">{saved?.news?.title}</h5>
                  </a>
                  <p className="card-text">{saved?.news?.synopsis}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      like | comment
                    </small>
                  </p>
                </div>
                {saved?.news?.img !== "" && (
                  <img src={saved?.news?.img} className="card-img-bottom" />
                )}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
