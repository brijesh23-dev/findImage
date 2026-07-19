import { useEffect } from 'react';
import { getGif, getPhotos, getVideos } from '../api/MediaApi.js';
import {setLoading, setError, setResults } from '../features/searchSlice.js';
import ResultCard from './ResultCard.jsx';
import { useDispatch, useSelector } from 'react-redux';

const ResultGrid = () => {

    const { query, activeTab, loading, results, error } = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const getdata = async () => {
            try {
                let data = [];
                dispatch(setLoading());
                if (!query) {
                    dispatch(setResults([]));
                    return;
                }
                if (activeTab === 'Photos') {
                    let response = await getPhotos(query);
                    console.log(response);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html,
                        save:item.links.download
                    }));
                    dispatch(setResults(data));
                }
                if (activeTab === 'Videos') {
                    let response = await getVideos(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }));
                    dispatch(setResults(data));
                }
                if (activeTab === 'GIFs') {
                    let response = await getGif(query);
                    console.log(response);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title:'GIF',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url:item.url
                    }));
                    dispatch(setResults(data));
                }
            } catch (err) {
                dispatch(setError(err.message || 'Failed to fetch'));
            }
        }
        getdata();
    }, [query, activeTab, dispatch]);
    if(error) return <div className='text-white'>Error: {error}</div>
    if(loading) return <div className='text-white mx-auto'>Loading...</div>

    return (
        <div className=' p-4 w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mode'>
            {results.map((item, idx) => {
                return (
                    <div key={idx} className='mb-4 break-inside-avoid'>
                        <ResultCard item={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ResultGrid