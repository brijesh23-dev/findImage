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
        <form action="#" className='flex gap-2  border-none mode' onSubmit={SubmitHandle}>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder='search assets here ...' 
            className='text-left w-full  border-none   hover:outline   hover:outline-offset-2 hover:outline-neutral-200 rounded-full px-5 py-2  appearance-none' />
            <button type='submit' className='text-center text-2xl'><CiSearch></CiSearch></button>
        </form>
    )
}

export default SearchBox;