import api from "../http";

export default class PostsService {
    static getOptimizations(){
        return api.get('/v1/optimizations')
    }
}