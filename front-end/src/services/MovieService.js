import axios from 'axios'

const BASE_URL = '/api/movies/'

class MovieService {
    static async getAll(params) {
        const { data } = await axios.get(BASE_URL, {
            params: {
                year: params.year.join(','),
                rating: params.rating.join(','),
                genres: params.genres.join(','),
                page: params.page
            }
        })

        return data
    }

    static async getPopular() {
        const { data } = await axios.get(BASE_URL + 'popular')
        return data
    }

    static async getNew() {
        const { data } = await axios.get(BASE_URL + 'new')
        return data
    }

    static async search(query) {
        const { data } = await axios.get(BASE_URL + 'search', {
            params: { query }
        })

        return data
    }

    static async getOne(id) {
        const { data } = await axios.get(BASE_URL + id)
        return data
    }
}

export default MovieService