import { useSelector, useDispatch } from 'react-redux';
import { setActiveTabs } from '../features/searchSlice';


const Tabs = () => {    
    const tabs = ['Photos', 'Videos', 'GIFs'];
    const activeTab = useSelector((state)=>state.search.activeTab);
    console.log(activeTab);
    const dispatch = useDispatch();
  return (
    <div className='flex gap-3 px-10'>{tabs.map((tab,idx)=>(
        <button key={idx} onClick={()=>dispatch(setActiveTabs(tab))} className={`${(activeTab===tab ? 'bg-blue-900' : 'bg-blue-600')} px-3 py-1 rounded-lg m-3 cursor-pointer hover:scale-95`}>{tab}</button>
    ))}</div>
  )
}

export default Tabs