import { addCollection ,addToast} from '../features/collectionSlice';
import {useDispatch} from 'react-redux';

const ResultCard = ({ item = {} }) => {

  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast());
  }

  return (
    <div className='w-full gap-4 relative  rounded-md overflow-hidden shadow-lg'>
      <a className='h-full block' href={item.url}>
        {item.type === 'photo' && <img src={item.src} alt={item.title} className='mb-4 w-full transition duration-300 hover:scale-105 object-cover object-center' />}
        {item.type === 'video' && <video src={item.src} className='w-full h-full object-cover object-center rounded-t' controls autoPlay mut></video>}
        {item.type === 'gif' && <img src={item.src} alt={item.title} className='w-full object-center object-cover rounded-t' />}
      </a>
      {/* card */}
      <div className='absolute bottom-0 w-full px-6 py-10 text-white result-card flex justify-between items-center gap-2 bg-gradient-to-b from-transparent to-black'>
        <h2 className='text-md font-semibold font-sans capitalize tracking-tighter leading-4'>{item.title}</h2>
        <button className='font-sans font-medium bg-orange-600 rounded-sm px-3 h-8 hover:bg-orange-700' onClick={() => { addToCollection(item) }}>SAVE</button>
      </div>
    </div>

  )
}

export default ResultCard