import React from 'react';
import PostItem from "./PostItem";

const PostList = ({postList, name}) => {
    return (
        <div className="post_list">
            <div className="post_list_header">
                <h1>Список оптимизаций пользователя {name}</h1>
            </div>
            <button className="post_list_add_btn">Add post</button>
            {
                postList.map((post) =>
                    <PostItem post={post} key={post.id}/>
                )
            }
        </div>
    );
};

export default PostList;