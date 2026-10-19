import { addCollection ,addToast} from '../features/collectionSlice';
import {useDispatch} from 'react-redux';

const ResultCard = ({ item = {} }) => {

  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast());
  }

  return (
    <div className='w-full gap-4 relative rounded-md overflow-hidden shadow-lg'>
      {item.type === 'video' ? (
        <video
          src={item.src}
          poster={item.thumbnail}
          className='block w-full aspect-video bg-black object-contain'
          controls
          playsInline
          preload='metadata'
          aria-label={item.title || 'Video result'}
        />
      ) : (
        <a className='h-full block' href={item.url} target='_blank' rel='noreferrer'>
          {item.type === 'photo' && <img src={item.src} alt={item.title || 'Photo'} className='w-full object-cover object-center hover:scale-105 transition duration-200 ease-in' />}
          {item.type === 'gif' && <img src={item.src} alt={item.title || 'GIF'} className='w-full object-center object-cover rounded-t' />}
        </a>
      )}
      <div className={`${item.type === 'video' ? 'relative bg-neutral-950 px-4 py-3' : 'absolute bottom-0 w-full px-6 py-10 bg-gradient-to-b from-transparent to-black'} text-white result-card flex justify-between items-center gap-2`}>
        <h2 className='text-md font-semibold font-sans capitalize tracking-tighter leading-4'>{item.title}</h2>
        <button type='button' aria-label='Save to collection' className='shrink-0 font-sans font-medium bg-orange-600 rounded-sm px-3 h-8 hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' onClick={() => { addToCollection(item) }}>SAVE</button>
      </div>
    </div>

  )
}

export default ResultCard