import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../features/collectionSlice'

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeCollection(id));
  }

  return (
    <div className='group relative overflow-hidden border-none rounded-2xl'>
      {item.type === 'video' ? (
        <video
          src={item.src}
          poster={item.thumbnail}
          className='block aspect-video w-full bg-black object-contain'
          controls
          playsInline
          preload='metadata'
          aria-label={item.title || 'Saved video'}
        />
      ) : (
        <a href={item.url} target='_blank' rel='noreferrer' className='block h-80 w-full overflow-hidden'>
          {item.type === 'photo' && <img src={item.src} alt={item.title || 'Photo'} className='h-full w-full object-cover object-center transition duration-300 group-hover:scale-105' />}
          {item.type === 'gif' && <img src={item.src} alt={item.title || 'GIF'} className='h-full w-full object-cover object-center' />}
        </a>
      )}
      <div className={`${item.type === 'video' ? 'relative bg-slate-950' : 'absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent'} px-5 py-4 text-white`}>
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