import React, {useContext, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import ModalWindow from "./components/Modal/ModalWindow";
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite"
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 2, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 3, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 4, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
        {id: 5, title: "Первый пост", date: "10.04.2000", status: "В процессе", bs_number: 5},
    ])
    const [loginModal, setLoginModal] = useState(false)
    const [postModal, setPostModal] = useState(false)

    const [fileDrag, setFileDrag] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const {store} = useContext(Context)

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    if (!store.isAuth) {
        return (
            <ModalWindow visible={true} setVisible={setLoginModal}>
                <LoginForm setModalVisible={setLoginModal}/>
            </ModalWindow>
        )
    }

    function dragStartHandler(e) {
        e.preventDefault()
        setFileDrag(true)
    }

    function  dragLeaveHandler(e) {
        e.preventDefault()
        setFileDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let file = e.dataTransfer.files
        const formDate = new FormData()
        formDate.append("file", file)
        //axios запрос проверка ответа если ок
        setLoaded(true)
        setFileDrag(false)
    }
    return (
        <div className="app">
            <ModalWindow visible={postModal} setVisible={setPostModal}>
                <div className="add_new_post">
                    <div className="map">
                        {
                            fileDrag
                                ? <div className="drop_area prev_area"
                                       onDragStart={event => dragStartHandler(event)}
                                       onDragLeave={event => dragLeaveHandler(event)}
                                       onDragOver={event => dragStartHandler(event)}
                                       onDrop={event => onDropHandler(event)}
                                > Отпустите, чтобы загрузить</div>
                                : <div className="prev_area"
                                       onDragStart={event => dragStartHandler(event)}
                                       onDragLeave={event => dragLeaveHandler(event)}
                                       onDragOver={event => dragStartHandler(event)}
                                > Перетащите файл, чтобы загрузить</div>
                        }
                        {
                            loaded && (<div className="prev_area map_area"> Проверка </div>)
                        }
                    </div>
                    <div className="post_input">
                        <input
                            className="new_post_inp"
                            placeholder="Название"
                            type="text"/>
                        <input
                            className="new_post_inp"
                            placeholder="Количество машин"
                            type="number"/>
                        <button>Отправить</button>
                    </div>
                    <div className="post_input">
                        <h4 style={{"color":"white"}}>Тип точки</h4>
                        <div className="radio_btn">
                            <input type="radio"
                                   name="point_type"
                                   value="bc"
                                   id="bc"
                                   defaultChecked="true"/>
                            <label htmlFor="bc">Штаб</label>
                        </div>
                        <div className="radio_btn">
                            <input type="radio"
                                   name="point_type"
                                   value="bs"
                                   id="bs"/>
                            <label htmlFor="bs">Базирование машин</label>
                        </div>
                        <div className="radio_btn">
                            <input type="radio"
                                   name="point_type"
                                   value="iz"
                                   id="iz"/>
                            <label htmlFor="iz">Зоны интереса</label>
                        </div>
                    </div>
                    <div className="post_input_clean">
                        <button>Очистить</button>
                    </div>

                </div>
            </ModalWindow>
            <ModalWindow visible={loginModal} setVisible={setLoginModal}>
                <LoginForm setModalVisible={setLoginModal}/>
            </ModalWindow>
            <PostList postList={posts} name={store.user} remove={removePost} addControl={setPostModal}/>
            <button className="logout_button" onClick={() => store.logout()}>logout</button>
            <div className="viewer">hello</div>
        </div>
    );
}

export default observer(App);
