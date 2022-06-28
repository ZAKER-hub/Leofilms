import axios from 'axios'

const BASE_URL = '/api/users/'

class UserService {
    static async register(body) {
        const { data } = await axios.post(BASE_URL + 'register', body)
        return data
    }

    static async login(body) {
        const { data } = await axios.post(BASE_URL+ 'login', body)
        return data
    }

    static async auth(token) {
        const { data } = await axios.get(BASE_URL + 'auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }

    static async addToFavorite(user_id, movie) {
        const { data } = await axios.put(BASE_URL + 'favorite', { user_id, movie })
        return data
    }

    static async addToWatchLater(user_id, movie) {
        const { data } = await axios.put(BASE_URL + 'watchLater', { user_id, movie })
        return data
    }

    static async saveTestResult(user_id, result) {
        const { data } = await axios.put(BASE_URL + 'testResult', { user_id, testResult: result })
        return data
    }
}

export default UserService