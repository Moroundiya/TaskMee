import React from 'react';
import { Icon } from '@iconify/react';


export const AddTask = ({ newValue, getDate, initialtime, deadlinetime }) => {
    return (
        <div className='flex items-center justify-bektween py-2 border-[#5957575f] border-b h-[75px] xl:h-[70px] w-full'>
            <div className='px-3 border-l-4 rounded-sm border-yellow-500 flex items-center h-full py-4 w-[58%] '>
                <input type="checkbox" className='cursor-pointer w-[17px] h-[17px]' />
                <div className='ml-4 sm:ml-6'>
                    <h1 className='text-xl '>{newValue}</h1>
                    <p className='text-[12px] leading-tight'>{getDate}</p>
                    <p className='text-[11px] leading-tight'>{initialtime} - {deadlinetime}</p>
                </div>
            </div>
            <div className='w-[18%] sm:w-[15%]'>
            <p className='text-white bg-yellow-500 px-2 py-1 rounded-md text-[12.8px] text-center'>Pending</p>
            </div>
            <div className='flex text-xl sm:text-2xl space-x-3 sm:space-x-4 pe-1 xl:pe-2 justify-end w-[24%] sm:w-[37%]'>
                <Icon icon="bx:edit" className='cursor-pointer' />
                <Icon icon="ion:trash" className='cursor-pointer' />
            </div>
        </div>
    )
}
