import {createRoot} from 'react-dom/client';
import App from './App';
import Store from "./store/Store";
import {createContext} from "react";

const store = new Store();
export const Context = createContext({store})
const container = document.getElementById('root');
const root = createRoot(container);
const app = (
    <Context.Provider value={{store}}>
        <App />
    </Context.Provider>
);

root.render(app);
