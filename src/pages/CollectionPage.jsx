import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CollectionCard from '../components/CollectionCard.jsx'

const CollectionPage = () => {
   const collection = useSelector(store => store.collection?.items ?? []);
  return (
    <main className='min-h-screen mode'>
      <div className='mx-auto max-w-7xl px-4 py-8'>
        <header className='mb-8 flex flex-col gap-4  backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h1 className='text-3xl font-semibold'>Collection</h1>
            <p className='mt-2 text-sm '>Review and manage your saved media assets.</p>
          </div>
          <Link to='/' className='inline-flex rounded-full '>
            Back to Search
          </Link>
        </header>

        {collection.length === 0 ? (
          <div className='rounded-3xl border border-dashed border-slate-500 bg-slate-950/50 p-10 text-center text-slate-300'>
            No items saved yet. Search for photos, videos and GIFs to add to your collection.
          </div>
        ) : (
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 border-none'>
            {collection.map((item, idx) => (
              <CollectionCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default CollectionPage;