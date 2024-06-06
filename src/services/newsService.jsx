export const getAllNews = () => {
  return fetch("http://localhost:8088/news?_expand=user").then((res) => res.json());
};

export const getSavedNews = (loggedInUserId) => {
  return fetch(
    `http://localhost:8088/saved?userId=${loggedInUserId}&_expand=news`
  ).then((res) => res.json());
};
