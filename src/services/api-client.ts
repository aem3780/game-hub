import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '227fe47614134cd9ab6e13135fd3beba'
    }
})