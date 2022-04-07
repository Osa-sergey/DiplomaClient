import React, {useContext, useState} from 'react';
import {Context} from "../index";

const LoginForm = ({setModalVisible}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);

    return (
        <div className="login">
            <input className="login_input"
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input className="login_input"
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='password'
            />
            <button onClick={() => {
                   // store.login(email, password);
                    setModalVisible(false);
                }
            } >
                Логин
            </button>
        </div>
    );
};

export default LoginForm;