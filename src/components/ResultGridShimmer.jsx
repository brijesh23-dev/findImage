import React from 'react'
import ResultCard from './ResultCard.jsx'

const ResultGridShimmer = () => {
    const array = Array.from({ length: 30 }, (_, index) => index + 1);
    console.log(array);
  return (
    <div className=' p-4 w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mode'>
            {array.map((item, idx) => {
                return (
                    <div key={idx} className='mb-4 break-inside-avoid  h-[300px] rounded-md dark:bg-neutral-800 bg-neutral-200 animate-pulse'>
                    </div>
                )
            })}
        </div>
  )
}

export default ResultGridShimmer