import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../features/collectionSlice'

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeCollection(id));
  }

  return (
    <div className='group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-lg'>
      <a href={item.url} target='_blank' rel='noreferrer' className='block h-80 w-full overflow-hidden'>
        {item.type === 'photo' && <img src={item.src} alt={item.title} className='h-full w-full object-cover object-center transition duration-300 group-hover:scale-105' />}
        {item.type === 'video' && <video src={item.src} className='h-full w-full object-cover object-center' controls muted />}
        {item.type === 'gif' && <img src={item.src} alt={item.title} className='h-full w-full object-cover object-center' />}
      </a>
      <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-5 py-4 text-white'>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='truncate text-sm font-semibold'>{item.title || 'Untitled'}</h2>
          <button type='button' onClick={() => handleRemove(item.id)} className='rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide transition hover:bg-rose-600'>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard