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
        <form action="#" className='flex gap-2  border-none mode' onSubmit={SubmitHandle}>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder='search assets here ...' 
            className='text-left w-full focus:outline  hover:outline-2 hover:outline-neutral-400 rounded-full px-5 py-2 ' />
            <button type='submit' className='text-center '>Search</button>
        </form>
    )
}

export default SearchBox;