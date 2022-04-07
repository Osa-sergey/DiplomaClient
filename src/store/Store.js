import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.first_name + response.data.last_name)
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
        } catch (e) {
            console.log(e);
        }
    }
}