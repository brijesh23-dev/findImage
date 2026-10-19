import axios from 'axios';
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const pexel_key = import.meta.env.VITE_PEXEL_KEY
const tenor_key = import.meta.env.VITE_TENOR_KEY

async function getData(url, config, provider) {
    try {
        const res = await axios.get(url, config)
        return res.data
    } catch (error) {
        const status = error.response?.status
        const detail = error.response?.data?.error?.message
            || error.response?.data?.error
            || error.response?.data?.message

        if (typeof detail === 'string' && detail.trim()) {
            throw new Error(detail)
        }
        if (status === 429) {
            throw new Error(`${provider} rate limit reached. Try again shortly.`)
        }
        if (status === 401 || status === 403) {
            throw new Error(`${provider} rejected the API key. Check your environment variables.`)
        }
        if (status) {
            throw new Error(`${provider} request failed with status ${status}.`)
        }
        throw new Error(`Could not connect to ${provider}. Check your connection and try again.`)
    }
}

export async function getPhotos(query, page = 1, per_page = 30) {
    return getData('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    }, 'Unsplash')
}

export async function getVideos(query, per_page = 30) {
    return getData('https://api.pexels.com/videos/search', {
        params: { query, per_page },
        headers: { Authorization: pexel_key }
    }, 'Pexels')
}

export async function getGif(query, limit = 20) {
    return getData('https://tenor.googleapis.com/v2/search', {
        params: { query, key: tenor_key, limit }
    }, 'Tenor')
}

