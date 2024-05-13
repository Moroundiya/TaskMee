import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export const AddTask = ({ newValue, getDate, durationHr, durationMin, priority, test, allTask, deletetask, idValue, editTaskBtn, primaryKey }) => {

    const [complete, setComplete] = useState();
    const [newcomplete, setnewcomplete] = useState();
    // const [pushTask, setPushtask] = useState([]);

    useEffect(() => {
        setnewcomplete(complete)
        // setPushtask(allTask)
    }, [complete])

    const taskComplete = event => {
        if (event.target.checked) {
            setComplete(true)
        } else {
            setComplete(false)
        }
    }
    return (
        <div className='flex items-center py-2 border-[#5957575f] border-b h-[75px] xl:h-[70px] w-full'>
            <div className={newcomplete ? 'px-3 border-l-4 border-green-500 rounded-sm flex items-center h-full py-4 w-[58%]' : `px-3 border-l-4 ${priority} rounded-sm flex items-center h-full py-4 w-[58%]`}>
                <input type="checkbox" className='cursor-pointer w-[17px] h-[17px]' onChange={taskComplete} />
                <div className='ml-4 sm:ml-6'>
                    <h1 className={newcomplete ? 'text-xl line-through' : 'text-xl'}>{newValue}</h1>
                    <p className={newcomplete ? 'text-[12px] leading-tight line-through' : 'text-[12px] leading-tight'}>{getDate}</p>
                    <p className={newcomplete ? 'text-[11px] leading-tight line-through' : 'text-[11px] leading-tight'}>Duration: &nbsp;{durationHr} - {durationMin}</p>
                </div>
            </div>
            {/* <p>{idValue}</p> */}
            <div className='w-[18%] sm:w-[15%]'>
                <p className={newcomplete ? 'text-white bg-green-500 px-2 py-1 rounded-md text-[12.8px] text-center' : 'text-white bg-yellow-500 px-2 py-1 rounded-md text-[12.8px] text-center'}>{newcomplete ? 'Completed' : 'Pending'}</p>
            </div>
            {/* {primaryKey} */}
            <div className={newcomplete ? 'flex text-xl sm:text-2xl space-x-3 sm:space-x-4 pe-1 xl:pe-2 justify-end w-[24%] sm:w-[37%] text-gray-600 pointer-events-none' : 'flex text-xl sm:text-2xl space-x-3 sm:space-x-4 pe-1 xl:pe-2 justify-end w-[24%] sm:w-[37%]'}>
                <Icon icon="bx:edit" className='cursor-pointer' onClick={()=>editTaskBtn(idValue)} />
                <Icon icon="ion:trash" className='cursor-pointer' onClick={() => deletetask(idValue)} />
            </div>
        </div>
    )
}
