import React from 'react'
import NewGroup from './NewGroup'
import { GiCrossMark } from "react-icons/gi";
import NewSubtask from './NewSubtask';
import NewTask from './NewTask';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../redux/modal/Action';

const PopupTask = () => {

  const modalNum = useSelector(state => state.showModalReducer.value);
  const dispatch = useDispatch();
  
  return (
    <div className='inset-0 bg-transparent absolute flex justify-center items-center backdrop-blur-xl z-50'>
        <div className='bg-white p-4 relative'>
            <GiCrossMark className='absolute top-2 right-2 hover:text-red-600' onClick={() => dispatch(hideModal())}/>
            {
              modalNum == 1 ? <NewGroup /> : modalNum == 2 ? <NewSubtask /> : <NewTask />
            }
        </div>
    </div>
  )
}

export default PopupTask