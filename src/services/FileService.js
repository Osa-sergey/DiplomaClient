import api from "../http";

export default class FileService {
    static async sendFile(file) {
        return api.post('/v1/files', {file: file})
    }
}