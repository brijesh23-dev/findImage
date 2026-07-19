import { createSlice } from "@reduxjs/toolkit";
import {  Bounce, toast } from 'react-toastify';
const storedCollection = JSON.parse(localStorage.getItem('collection') || '[]')
const initialState = {
    items: Array.isArray(storedCollection) ? storedCollection : []
}
const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))

            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection');
        },
        addToast: () => {
            toast.success('added to collectios!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
})

export const { addCollection, removeCollection, clearCollection,addToast} = collectionSlice.actions
export default collectionSlice.reducer