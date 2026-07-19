import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../features/searchSlice';

const SearchBox = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const SubmitHandle = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('');
    }
    return (
        <form action="#" className='flex gap-2  px-10 py-2 bg-white text-black dark:bg-gray-900 dark:text-white' onSubmit={SubmitHandle}>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder='search assets here ...' className='px-4 py-2 m-5 border-2 outline-none bg-gray-800 rounded-sm text-left w-full bg-white text-black dark:bg-gray-900 dark:text-white' />
            <button type='submit' className='m-5 border-2 outline-none rounded-sm px-8 text-center bg-white text-black dark:bg-gray-900 dark:text-white'>Search</button>
        </form>
    )
}

export default SearchBox