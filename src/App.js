import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import ModalWindow from "./components/Modal/ModalWindow";
import LoginForm from "./components/LoginForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
        {id: 2, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
        {id: 3, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
        {id: 4, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
        {id: 5, title: "Первый пост", date: "10.04.2000", status: "В процессе"},
    ])
    const [loginModal, setLoginModal] = useState(false)
    const [postModal, setPostModal] = useState(false)
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="app">
            <ModalWindow visible={postModal} setVisible={setPostModal}>
            </ModalWindow>
            <ModalWindow visible={loginModal} setVisible={setLoginModal}>
                <LoginForm setModalVisible={setLoginModal}/>
            </ModalWindow>
            <PostList postList={posts} name={"serg"} remove={removePost} addControl={setPostModal}/>
            <button className="login_button" onClick={() => setLoginModal(true)}>login</button>
            <div className="viewer">hello</div>
        </div>
    );
}

export default App;
