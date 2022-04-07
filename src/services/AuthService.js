import api from "../http";

export default class AuthService {
    static async login(email, password) {
        return api.post('/v1/auth/login', {email, password}, )
    }

    static async logout() {
        return api.post('/v1/auth/logout')
    }

    static async signup(email, firsName, lastName, password) {
        return api.post('/v1/auth/signup', {email, firsName, lastName, password})
    }
}