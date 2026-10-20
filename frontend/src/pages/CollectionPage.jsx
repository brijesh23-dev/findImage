import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CollectionCard from '../components/CollectionCard.jsx'
import LogoutButton from '../components/LogoutButton.jsx'

const CollectionPage = () => {
   const collection = useSelector(store => store.collection?.items ?? []);
  return (
    <main className='min-h-screen mode'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8'>
        <header className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h1 className='text-2xl font-semibold sm:text-3xl'>Collection</h1>
            <p className='mt-2 text-sm '>Review and manage your saved media assets.</p>
          </div>
          <div className='flex flex-wrap items-center gap-2 sm:gap-3'>
            <Link to='/' className='inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:px-4'>
              Back to Search
            </Link>
            <LogoutButton />
          </div>
        </header>

        {collection.length === 0 ? (
          <div className='rounded-2xl border border-dashed border-slate-500 bg-slate-950/50 p-6 text-center text-slate-300 sm:rounded-3xl sm:p-10'>
            No items saved yet. Search for photos, videos and GIFs to add to your collection.
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-4 border-none sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
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