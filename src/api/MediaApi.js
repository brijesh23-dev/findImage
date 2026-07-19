import axios from 'axios';
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const pexel_key = import.meta.env.VITE_PEXEL_KEY
const tenor_key = import.meta.env.VITE_TENOR_KEY

export async function getPhotos(query,page=1,per_Page=10){
      const  res = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query,page,per_Page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data
}

export async function getVideos(query,per_page=30){
    const res = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page},
        headers:{Authorization:`${pexel_key}`}
    })
    return res.data
    
}
export async function getGif(query,limit=20){
    const res = await axios.get('https://tenor.googleapis.com/v2/search',{
        params:{query,key:tenor_key,limit}
    })
    return res.data
    
}

