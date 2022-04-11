import React from 'react';

const CreateNewPostInput = () => {
    return (
        <div>
            <div className="post_input">
                <input
                    className="new_post_inp"
                    placeholder="Название"
                    type="text"/>
                <input
                    className="new_post_inp"
                    placeholder="Количество машин"
                    type="number"/>
                <input
                    className="new_post_inp"
                    placeholder="Радиус БС (км)"
                    type="number"/>
                <input
                    className="new_post_inp"
                    placeholder="Радиус АС (км)"
                    type="number"/>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default CreateNewPostInput;