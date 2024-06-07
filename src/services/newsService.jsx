export const getAllNews = () => {
  return fetch("http://localhost:8088/news?_expand=user").then((res) => res.json());
};

export const getSavedNews = (currentUser) => {
  return fetch(
    `http://localhost:8088/saved?userId=${currentUser}&_expand=news&_expand=user`
  ).then((res) => res.json());
};

export const createNewsArticle = (news) => {
  return fetch(`http://localhost:8088/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  });
};

export const saveNewsArticle = (saved) => {
  return fetch(`http://localhost:8088/saved`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(saved),
  });
};