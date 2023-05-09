import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1c96398cb91347f097d722c374713f0f'
    }
})