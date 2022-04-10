import React, {useContext, useState} from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import CreateNewPost from "./CreateNewPost";

const PostList = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 2, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 3, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 4, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 5, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
    ])
    const [postModal, setPostModal] = useState(false)
    const {store} = useContext(Context)

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function updatePostList() {

    }

    return (
        <div>
            <CreateNewPost postModal={postModal} setPostModal={setPostModal}/>
            <div className="post_list">
                <div className="post_list_header">
                    <h1>Список оптимизаций пользователя {store.user}</h1>
                </div>
                <div className="post_list_btns">
                    <button onClick={() => setPostModal(true)}>Add post</button>
                    <button onClick={() => updatePostList()}>Update</button>
                </div>
                <TransitionGroup>
                    {
                        posts.map((post) =>
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post">
                                <PostItem post={post} remove={removePost}/>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        </div>
    );
};

export default observer(PostList);