import React from 'react';

const PostItem = ({post, remove, select}) => {
    const date = new Date(post.date);
    const datetime = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()<10 ? '0': ''}${date.getMinutes()}`;
    return (
        <div onClick={() => select(post)} className="post">
            <div className="post_content">
                <h1>
                    <strong className="header_text">{post.title}</strong>
                </h1>
                <h3><b>Дата оптимизации:</b> {datetime}</h3>
                <h3><b>Статус:</b> {post.status}</h3>
                <h3><b>Кол-во БС:</b> {post.bs_number}</h3>
                <h3><b>Радиус БС:</b> {post.bs_rad}</h3>
                <h3><b>Радиус АС:</b> {post.as_rad}</h3>
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