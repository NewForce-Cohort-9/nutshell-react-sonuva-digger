import "./News.css";
import { useEffect, useState } from "react";
import {
  getAllNews,
  getSavedNews,
  deleteSavedNewsArticle,
  saveNewsArticle,
  deleteCreatedNewsArticle,
} from "../../services/newsService.jsx";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const News = ({ currentUser }) => {
  const [allNews, setAllNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [saveClickedMap, setSaveClickedMap] = useState({});
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [createdNews, setCreatedNews] = useState([]);
  const navigate = useNavigate();

  const handleSaveNews = (event, newsId) => {
    event.preventDefault();
    const newSavedArticle = {
      newsId,
      userId: currentUser.id,
    };

    const isAlreadySaved = savedNews.some((saved) => saved.newsId === newsId);
    if (isAlreadySaved) {
      window.alert("This article is already saved.");
      return;
    }

    saveNewsArticle(newSavedArticle).then(() => {
      getSavedNews(currentUser.id).then((savedNewsArray) => {
        setSavedNews(savedNewsArray);
      });
      navigate("/news");

      setSaveClickedMap((prevState) => ({
        ...prevState,
        [newsId]: true,
      }));
    });
  };

  const handleUnsaveNews = (event, saved) => {
    event.preventDefault();
    deleteSavedNewsArticle(saved).then(() => {
      setSavedNews((prevSavedNews) =>
        prevSavedNews.filter(
          (savedArticle) => savedArticle.news?.id !== saved.news?.id
        )
      );
    });
  };

  const handleDeleteCreatedNewsArticle = (event, news) => {
    event.preventDefault();
    deleteCreatedNewsArticle(news).then(() => {
      setDeleted(!deleted); // Toggle the deleted state to trigger re-render
    });
  };

  useEffect(() => {
    getAllNews().then((newsArray) => {
      setAllNews(newsArray);
    });
  }, [deleted]);

  useEffect(() => {
    if (currentUser) {
      getSavedNews(currentUser.id).then((savedNewsArray) => {
        setSavedNews(savedNewsArray);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then((userArray) => {
        setUsers(userArray);
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
            news.user.id === currentUser.id ? (
              <Button
                onClick={(event) => handleDeleteCreatedNewsArticle(event, news)}
              >
                Delete
              </Button>
            ) : (
              "Shared by " + getUsernameById(news.user.id)
            );
          return (
            <div className="card m-3 mw-100" key={news.id}>
              <div className="card-body">
                <div className="card-title">
                  {news.url ? (
                    <a href={news.url}>{news.title}</a>
                  ) : (
                    <span>{news.title}</span>
                  )}
                  <aside>{sharedBy}</aside>
                </div>

                <p className="card-text">{news.synopsis}</p>
                <p className="card-text">
                  <small
                    className="text-body-secondary"
                    onClick={(event) => handleSaveNews(event, news.id)}
                  >
                    {saveClickedMap[news.id] ? <i>saved!</i> : "save"}
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
                    {saved.news.url ? (
                      <a href={saved.news.url}>{saved.news.title}</a>
                    ) : (
                      <span>{saved.news.title}</span>
                    )}
                    <aside>Shared by {sharedBy}</aside>
                  </div>
                  <p className="card-text">{saved.news.synopsis}</p>
                  <p className="card-text">
                    <small
                      className="text-body-secondary"
                      onClick={(event) => handleUnsaveNews(event, saved)}
                    >
                      unsave
                    </small>
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
