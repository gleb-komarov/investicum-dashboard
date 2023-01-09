import axios from "axios";

export default class ApiService {
    static async getAllAssetsCurrency(limit = 5) {
        return await axios.get('https://api.coincap.io/v2/assets', {
            params: {
                limit: limit,
            }
        });
    }
}