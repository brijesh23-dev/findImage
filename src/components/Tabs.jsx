import { useSelector, useDispatch } from 'react-redux';
import { setActiveTabs } from '../features/searchSlice';


const Tabs = () => {    
    const tabs = ['Photos', 'Videos', 'GIFs'];
    const activeTab = useSelector((state)=>state.search.activeTab);
    console.log(activeTab);
    const dispatch = useDispatch();
  return (
    <div className='flex gap-3 justify-center items-center border-none mode font-Inter font-light '>{tabs.map((tab,idx)=>(
        <button key={idx} onClick={()=>dispatch(setActiveTabs(tab))} className={`${(activeTab===tab ?  '' : '')}  shadow-md px-3  py-2 cursor-pointer `}>{tab}</button>
    ))}</div>
  )
}

export default Tabs