import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../features/searchSlice';
import { CiSearch } from 'react-icons/ci';

const SearchBox = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const SubmitHandle = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('');
    }
    return (
        <form action="#" role="search" className='flex min-w-0 w-full items-center gap-2 border border-neutral-300/70 rounded-full px-2 dark:border-neutral-700' onSubmit={SubmitHandle}>
            <input value={text} type="search" onChange={(e) => setText(e.target.value)} placeholder='Search photos, videos, and GIFs' aria-label="Search media"
            className='min-w-0 flex-1 border-none bg-transparent px-3 py-2.5 text-base outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400' />
            <button type='submit' aria-label="Submit search" className='grid size-11 shrink-0 place-items-center rounded-full text-2xl hover:bg-neutral-200/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:hover:bg-neutral-800'><CiSearch aria-hidden="true" /></button>
        </form>
    )
}

export default SearchBox;