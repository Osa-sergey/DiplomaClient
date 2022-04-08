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
    );
};

export default CreateNewPostInput;