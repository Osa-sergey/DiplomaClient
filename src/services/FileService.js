import api from "../http";

export default class FileService {
    static async sendFile(formData) {
        return api.post('/v1/files', formData)
    }
}