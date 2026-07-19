import Tabs from '../components/Tabs.jsx'
import ResultGrid from '../components/ResultGrid.jsx'
import SearchBox from '../components/SearchBox.jsx'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeProvider.jsx';
import {ThemeHook} from '../hook/ThemeHook.jsx'
const Homepage = () => {
    const {theme} = useTheme();
    const { query } = useSelector((store) => store.search);
    return (
        <div>
            <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
                <h2 className='text-medium'>MediaSearch</h2>
                <div className='flex gap-5'>
                    <Link to='/'>Search</Link>
                    <Link to='/collection'>Collection</Link>
                    <ThemeHook></ThemeHook>
                </div>
            </div>
            <SearchBox />
            {(!query) ? '' : <div>
                <Tabs />
                <ResultGrid />
            </div>}
        </div>
    )
}

export default Homepage