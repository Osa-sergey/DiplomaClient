import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PostsService from "../services/PostsService";

const CreateNewPostInput = ({setVisible}) => {
    const {store} = useContext(Context);
    const [post, setPost] = useState({roadmapId: '',title: '', bsNumber: '', bsRad: '', asRad: '', userId: store.userId})

    async function createPost() {
        const response = await PostsService.createOptimizationWithRoadmapId(post)
        setPost({roadmapId: '',title: '', bsNumber: '', bsRad: '', asRad: '', userId: store.userId})
        if(response.status === 200) {
            setVisible(false)
        }
    }

    return (
        <div>
            <div className="post_input">
                <input
                    value={post.roadmapId}
                    onChange={e => setPost({...post, roadmapId: e.target.value})}
                    className="new_post_inp"
                    placeholder="id файла"
                    type="number"/>
            </div>
            <div className="post_input">
                <input
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    className="new_post_inp"
                    placeholder="Название"
                    type="text"/>
                <input
                    value={post.bsNumber}
                    onChange={e => setPost({...post, bsNumber: e.target.value})}
                    className="new_post_inp"
                    placeholder="Количество машин"
                    type="number"/>
                <input
                    value={post.bsRad}
                    onChange={e => setPost({...post, bsRad: e.target.value})}
                    className="new_post_inp"
                    placeholder="Радиус БС (км)"
                    type="number"
                    step="0.01"/>
                <input
                    value={post.asRad}
                    onChange={e => setPost({...post, asRad: e.target.value})}
                    className="new_post_inp"
                    placeholder="Радиус АС (км)"
                    type="number"
                    step="0.01"/>
                <button onClick={() => createPost()}>Отправить</button>
            </div>
        </div>
    );
};

export default observer(CreateNewPostInput);