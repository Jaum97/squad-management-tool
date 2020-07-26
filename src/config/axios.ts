import Axios from 'axios'
import LRU from 'lru-cache'

const BYPASS_CORS_PROXY = 'https://cors-anywhere.herokuapp.com'

export const axiosInstance = Axios.create({
	baseURL: `${BYPASS_CORS_PROXY}/https://www.api-football.com/demo/v2`
})

export const cacheInstance = new LRU({ max: 10 })
