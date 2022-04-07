import React from 'react';

const PostItem = ({post}) => {
    return (
        <div className="post">
            <div className="post_content">
                <h1>
                    <strong className="header_text">{post.title}</strong>
                </h1>
                <h3><b>Дата оптимизации:</b> {post.date}</h3>
                <h3><b>Статус:</b> {post.status}</h3>
            </div>
            <button className="post_button">Delete</button>
        </div>
    );
};

export default PostItem;