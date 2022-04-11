import api from "../http";

export default class PostsService {
    static async getOptimizationsById(id){
        return api.get('/v1/optimizations', {
                params: {
                    user_id: id
                }
            })
    }

    static async deleteOptimizationById(id) {
        const request = `/v1/optimizations/${id}`
        return api.delete(request)
    }
}