import "./News.css";
import { useEffect, useState } from "react";
import {
  getAllNews,
  getSavedNews,
  saveNewsArticle,
} from "../../services/newsService.jsx";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/userService.jsx";

export const News = ({ currentUser }) => {
  const [allNews, setAllNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [users, setUsers] = useState([]);
  const [saved, setSaved] = useState({
    newsId: 0,
    userId: currentUser.id,
  });
  const navigate = useNavigate();

  const handleSaveNews = (event) => {
    event.preventDefault();
    {
      const newSavedArticle = {
        newsId: saved.newsId,
        userId: currentUser.id,
      };

      saveNewsArticle(newSavedArticle).then(() => {
        navigate("/news");
      });
    }
  };

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

  useEffect(() => {
    fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then((userArray) => {
        setUsers(userArray);
        console.log("Users set!");
      });
  }, []);

  const getUsernameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.username : "Unknown";
  };

  return (
    <section className="newsFlex">
      <article className="allNews">
        <div className="headerbox">
          <h2 className="subheading">All News</h2>
        </div>
        {allNews.map((news) => {
          const sharedBy =
            news.user.id === currentUser.id
              ? "you"
              : getUsernameById(news.user.id);
          return (
            <div className="card m-3 mw-100" key={news.id}>
              <div className="card-body">
                <div className="card-title">
                  {news.url ? (
                    <a href={news.url}>{news.title}</a>
                  ) : (
                    <span>{news.title}</span>
                  )}
                  <aside>Shared by {sharedBy}</aside>
                </div>

                <p className="card-text">{news.synopsis}</p>
                <p className="card-text">
                  <small
                    className="text-body-secondary"
                    onClick={handleSaveNews}
                  >
                    save
                  </small>
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
          <div className="headerbox">
            <h2 className="subheading">Saved Articles</h2>
            <div>
              <Button
                color="info"
                onClick={() => {
                  navigate("/news/create");
                }}
              >
                New Article
              </Button>
            </div>
          </div>
          {savedNews.map((saved, news) => {
            const sharedBy =
              saved.news.userId === currentUser.id
                ? "you"
                : getUsernameById(saved.news.userId);
            return (
              <div className="card m-3 mw-100" key={saved.news.id}>
                <div className="card-body">
                  <div className="card-title">
                    <a href={saved.news.url}>{saved.news.title}</a>
                    <aside>Shared by {sharedBy}</aside>
                  </div>

                  <a href={saved.news.url}>
                    <h5 className="card-title">{saved.news.title}</h5>
                  </a>
                  <p className="card-text">{saved.news.synopsis}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">unsave</small>
                  </p>
                </div>
                {saved.news.img !== "" && (
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
