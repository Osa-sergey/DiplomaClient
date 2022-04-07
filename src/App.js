import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
    {id: 2, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
    {id: 3, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
    {id: 4, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
    {id: 5, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
  ])
  return (
      <div className="app">
        <PostList postList={posts} name={"serg"}/>
        <div className="viewer">hello</div>
      </div>
  );
}

export default App;
