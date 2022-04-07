import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({postList, name, remove, addControl}) => {
    return (
        <div className="post_list">
            <div className="post_list_header">
                <h1>Список оптимизаций пользователя {name}</h1>
            </div>
            <button onClick={() => addControl(true)} className="post_list_add_btn">Add post</button>
            <TransitionGroup>
                {
                    postList.map((post) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post">
                            <PostItem post={post} remove={remove}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;