import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    user = '';
    userId = -1;
    isAuth = false;
    tmpPostId = -1;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user
    }

    setTmpPostId(id) {
        this.tmpPostId = id;
    }

    setUserId(id) {
        this.userId = id;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            console.log(response.data)
            this.setUser(response.data.first_name + ' ' + response.data.last_name)
            this.setUserId(response.data.user_id)
        } catch (e) {
            console.log(e);
        }
    }

    async signup(email, firsName, lastName, password) {
        try {
            const response = await AuthService.signup(email, firsName, lastName, password);
            return response.data.id;
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
            this.setUserId(-1);
        } catch (e) {
            console.log(e);
        }
    }
}