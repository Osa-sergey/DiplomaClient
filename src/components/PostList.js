import React, {useContext, useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import CreateNewPost from "./CreateNewPost";
import PostsService from "../services/PostsService";

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [postModal, setPostModal] = useState(false);
    const {store} = useContext(Context);
    useEffect(() =>
    {
        getPostList();
    }, [])

    const removePost = (post) => {
        PostsService.deleteOptimizationById(post.id);
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const selectPost = (post) => {
        store.setTmpPost(post);
    }

    const getPostList = async () => {
        const userId = store.userId;
        const response = await PostsService.getOptimizationsById(userId);
        setPosts([...response.data])
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
                    <button onClick={() => getPostList()}>Update</button>
                </div>
                <TransitionGroup>
                    {
                        posts.map((post) =>
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post">
                                <PostItem post={post} remove={removePost} select={selectPost}/>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        </div>
    );
};

export default observer(PostList);