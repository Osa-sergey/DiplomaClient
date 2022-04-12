import React, {useState} from 'react';
import ModalWindow from "./Modal/ModalWindow";
import CreateNewPostInput from "./CreateNewPostInput";
import FileService from "../services/FileService";

const CreateNewPost = ({postModal, setPostModal}) => {

    const [fileDrag, setFileDrag] = useState(false)
    const [loaded, setLoaded] = useState(false)

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
        let file = [...e.dataTransfer.files]
        console.log(file)
        const response =  FileService.sendFile(file)
        setLoaded(true)
        setFileDrag(false)
    }

    return (
        <ModalWindow visible={postModal} setVisible={setPostModal}>
            <div className="add_new_post">
                <div className="map">
                    {fileDrag
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
                <CreateNewPostInput setVisible={setPostModal}/>
            </div>
        </ModalWindow>
    );
};

export default CreateNewPost;