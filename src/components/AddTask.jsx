import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export const AddTask = ({ newValue, getDate, durationHr, taskIndex, taskList, taskCompleteValue, grabDynamicComplete, allTaskList, allTask, durationMin, priority, selectedTaskID, test, deletetask, idValue, editTaskBtn, primaryKey }) => {




    // const storeCompleteLocalDataUpdated = () => {
    //     const localCompleteData = localStorage.getItem('Updated')
    //     if (localCompleteData) {
    //         return JSON.parse(localCompleteData)
    //     } else {
    //         return []
    //     }
    // }


    const [complete, setComplete] = useState(false);
    const [newcomplete, setnewcomplete] = useState();
    const dateConvert = new Date(getDate).toDateString()
    const [getTaskCompleteValue, setgetTaskCompleteValue] = useState(taskCompleteValue)

    // const [actionComplete, setactionComplete] = useState();

    // useEffect(() => {
    //   }, [complete])


    // const 


    const checkTask = () => {

    }

    useEffect(() => {

        // setgetTaskCompleteValue(taskList[taskIndex].isCompleted)
        // const getEachCompleteTask = (selectedTaskID) => newcomplete.filter((task) => task.id == selectedTaskID)
        // setactionComplete(getEachCompleteTask)
        // console.log('Action complete ' + actionComplete)
        // console.log('Yes ' + JSON.stringify(complete))
        // grabDynamicComplete()
        // setnewcomplete(complete)
        // setactionComplete(getTaskCompleteValue)
        // console.log('NewComplete' + JSON.stringify(newcomplete))
        // grabDynamicComplete(complete)
        // localStorage.setItem('Updated', JSON.stringify(newcomplete))
        // grabnewcompleteArray(newcomplete)
        // console.log(newcomplete)
        // console.log('Alltask ' + JSON.stringify(allTask))
        // console.log('Each ' + getEachCompleteTask)
        // setgetTaskCompleteValue(actionComplete)
        // console.log('Actions ' + JSON.stringify(actionComplete))


        // localStorage.setItem('Completed', JSON.stringify(complete))

    }, [complete, newcomplete, getTaskCompleteValue, getTaskCompleteValue, allTask])

    const taskComplete = (event) => {

        // let updateAlltaskList;
        taskList[taskIndex] = {
            ...taskList[taskIndex], isCompleted: event.target.checked
        }

        localStorage.setItem('Tasks', JSON.stringify(taskList))
        setgetTaskCompleteValue(taskList[taskIndex].isCompleted)

    }
    return (
        <div div className='flex items-center py-2 border-[#5957575f] border-b h-[75px] xl:h-[70px] w-full dark:bg-[#1e293b] dark:text-[#E2E8F0]' >
            <div className={getTaskCompleteValue ? 'px-3 border-l-4 border-green-500 rounded-sm flex items-center h-full py-4 w-[58%]' : `px-3 border-l-4 ${priority} rounded-sm flex items-center h-full py-4 w-[58%]`}>
                <input type="checkbox" className='cursor-pointer w-[17px] h-[17px]' checked={getTaskCompleteValue} onChange={(event) => taskComplete(event, selectedTaskID)} />
                <div className='ml-4 sm:ml-6'>
                    <h1 className={getTaskCompleteValue ? 'text-xl line-through' : 'text-xl'}>{newValue}</h1>
                    <p className={getTaskCompleteValue ? 'text-[12px] leading-tight line-through dark:text-[#93989c]' : 'text-[12px] leading-tight dark:text-[#93989c]'}>{dateConvert}</p>
                    <p className={getTaskCompleteValue ? 'text-[11px] leading-tight line-through dark:text-[#93989c]' : 'text-[11px] leading-tight dark:text-[#93989c]'}>Duration: &nbsp;{durationHr} - {durationMin}</p>
                </div>
            </div>
            {/* <p>{idValue}</p> */}
            <div className='w-[18%] sm:w-[15%]'>
                <p className={getTaskCompleteValue ? 'text-white bg-green-500 px-2 py-1 rounded-md text-[12.8px] text-center' : 'text-white bg-yellow-500 px-2 py-1 rounded-md text-[12.8px] text-center'}>{getTaskCompleteValue ? 'Completed' : 'Pending'}</p>
            </div>
            {/* {primaryKey} */}
            <div className={getTaskCompleteValue ? 'flex text-xl sm:text-2xl space-x-3 sm:space-x-4 pe-1 xl:pe-2 justify-end w-[24%] sm:w-[37%]' : 'flex text-xl sm:text-2xl space-x-3 sm:space-x-4 pe-1 xl:pe-2 justify-end w-[24%] sm:w-[37%]'}>
                <Icon icon="bx:edit" className={getTaskCompleteValue ? 'cursor-pointer pointer-events-none text-gray-600' : 'cursor-pointer'} onClick={() => editTaskBtn(idValue)} />
                <Icon icon="ion:trash" className='cursor-pointer' onClick={() => deletetask(idValue)} />
            </div>
        </div>
    )
}
