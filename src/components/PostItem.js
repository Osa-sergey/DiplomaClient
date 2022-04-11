import React from 'react';

const PostItem = ({post, remove, select}) => {
    return (
        <div onClick={() => select(post)} className="post">
            <div className="post_content">
                <h1>
                    <strong className="header_text">{post.title}</strong>
                </h1>
                <h3><b>Дата оптимизации:</b> {post.date}</h3>
                <h3><b>Статус:</b> {post.status}</h3>
                <h3><b>Кол-во БС:</b> {post.bs_number}</h3>
            </div>
            <div className="post_button">
                <button onClick={() => remove(post)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostItem;