import { useEffect, useState } from 'react';
//import { getGif, getPhotos, getVideos } from '../api/MediaApi.js';
import {setLoading, setError, setResults } from '../features/searchSlice.js';
import ResultCard from './ResultCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ResultGridShimmer from './ResultGridShimmer.jsx';
import ErrorState from './ErrorState.jsx';
import reqPhotos from '../services/upsplashApi.js';
import reqVideos from '../services/pexelsApi.js';
import reqGif from '../services/tenorApi.js';

const ResultGrid = () => {
    const [retryCount, setRetryCount] = useState(0);
    const { query, activeTab, loading, results, error } = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const getdata = async () => {
            try {
                let data = [];
                if (!activeTab) {
                    dispatch(setResults([]));
                    return;
                }
                dispatch(setLoading());
                if (!query) {
                    dispatch(setResults([]));
                    return;
                }
                if (activeTab === 'Photos') {
                    data = await reqPhotos(query);
                    dispatch(setResults(data));
                }
                if (activeTab === 'Videos') {
                    data = await reqVideos(query)
                    dispatch(setResults(data));
                }
                if (activeTab === 'GIFs') {
                    data = await reqGif(query);
                    dispatch(setResults(data));
                }
            } catch (err) {
                dispatch(setError(err.message || 'Failed to fetch'));
            }
        }
        getdata();
    }, [query, activeTab, dispatch, retryCount]);

    if (error) return (
        <ErrorState
            title={`Couldn't load ${activeTab.toLowerCase()}`}
            message={error}
            onRetry={() => setRetryCount((count) => count + 1)}
        />
    )
    if (!activeTab) return <div className='p-4 text-center text-neutral-500'>Select a tab to view results</div>
    if (loading) return (
        <ResultGridShimmer />
    )
    if(results.length === 0) return <div className='p-4 text-center text-neutral-500'>No results found</div>

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