import "./CreateNews.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup, Input, Label, Form, Button } from "reactstrap";
import { createNewsArticle } from "../services/newsService.jsx";

export const CreateNewsForm = ({ currentUser }) => {
  const [news, setNews] = useState({
    url: "",
    title: "",
    synopsis: "",
    img: "",
  });
  const navigate = useNavigate();

  const handleCreateNewArticle = (event) => {
    event.preventDefault();
    if (news.title && news.synopsis) {
      const newNewsArticle = {
        userId: currentUser.id,
        url: news.url,
        title: news.title,
        synopsis: news.synopsis,
        img: news.img,
      };

      createNewsArticle(newNewsArticle).then(() => {
        navigate("/news");
      });
    } else {
      window.alert("Please fill out required fields!");
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleUrl">URL</Label>
        <Input
          id="exampleUrl"
          name="url"
          placeholder="Paste outgoing link here"
          type="url"
          onChange={(event) => {
            const newsCopy = { ...news };
            newsCopy.url = event.target.value;
            setNews(newsCopy);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTitle">
          Title <small className="required">*Required</small>
        </Label>
        <Input
          id="exampleTitle"
          name="title"
          placeholder="Enter post title here"
          type="title"
          required
          onChange={(event) => {
            const newsCopy = { ...news };
            newsCopy.title = event.target.value;
            setNews(newsCopy);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">
          Post Body <small className="required">*Required</small>
        </Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          required
          onChange={(event) => {
            const newsCopy = { ...news };
            newsCopy.synopsis = event.target.value;
            setNews(newsCopy);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleImg">Image URL</Label>
        <Input
          id="exampleImg"
          name="img"
          placeholder="Paste image link here"
          type="img"
          onChange={(event) => {
            const newsCopy = { ...news };
            newsCopy.img = event.target.value;
            setNews(newsCopy);
          }}
        />
      </FormGroup>
      <Button onClick={handleCreateNewArticle}>Submit</Button>
    </Form>
  );
};
