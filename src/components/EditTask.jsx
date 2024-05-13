import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';


function EditTask({ showEdit, newValue, editTaskModal, getDate, priority, currentId, grabEdittedName, currentDate, taskHr, taskMin, primaryId, selectedTask, editName, selectedTaskName, editDate, editStartTime, editEndTime }) {
    // console.log('here' + selectedTaskName)
    // const [selectedTaskName, setSelectedTaskName] = useState()
    // const [selectedTaskNamePro, setSelectedTaskNamePro] = useState()
    const [editTaskName, seteditTaskName] = useState()
    const [editTaskDate, seteditTaskDate] = useState()
    const [editdurationHr, seteditdurationHr] = useState()
    const [editdurationMin, seteditdurationMin] = useState()


    const clearEdittedName = () => {
        // editTaskModal(e, currentId)
        console.log('Hello world')
        seteditTaskName('')

    }

    useEffect(() => {
        // seteditTaskName(selectedTaskName)
        console.log(selectedTaskName)
        // seteditTaskDate(editDate)
        // seteditdurationHr(editStartTime)
        // seteditdurationMin(editEndTime)
        // console.log(editTaskName)
        // setSelectedTaskNamePro(selectedTaskName)
        grabEdittedName(editTaskName)
        // clearEdittedName(seteditTaskName(selectedTaskName))
        // console.log(selectedTaskNamePro)

    }, [editTaskName, selectedTaskName])


    // const geteditTaskName = selectedTaskName;

    // grabEdittedName(editTaskName)



    return (
        <div className={`absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] ${showEdit} justify-center items-center px-4 sm:px-0 transition-all duration-300 ease-in-out`}>
            <div className='bg-white h-auto w-full sm:w-[600px] rounded-lg px-4 py-8'>
                <div className='flex justify-between items-center mb-5'>
                    <p className='text-lg sm:text-xl'>Edit Task</p>
                    <Icon icon="ci:close-sm" className='text-3xl sm:text-4xl cursor-pointer -mr-2' onClick={editTaskModal} />
                </div>

                <form action="" onSubmit={(e) => { editTaskModal(e, currentId); clearEdittedName() }}>
                    <input type="text" name="" id="" className='w-full h-[45px] border-[#333333a9] border mt-5 outline-none px-2 rounded'
                        placeholder={selectedTaskName} value={editTaskName} onInput={(e) => { seteditTaskName(e.target.value) }} maxLength={17} required />
                    <p className='mt-5 text-[#242121] text-md'>Priority</p>
                    <div className='mt-3 text-[14.8px]'>
                        {priority == 'high' ? <button className='py-1 px-4 border bg-red-700 text-white border-red-700 mr-4 rounded transition-all ease-in-out duration-200 pointer-events-none hover:bg-red-700 hover:text-white'>High</button> : priority == 'medium' ? <button className='py-1 px-4 border border-orange-400 mr-4 bg-orange-400 text-white rounded transition-all ease-in-out duration-200 pointer-events-none hover:bg-orange-400 hover:text-white'>Medium</button> : <button className='py-1 px-4 border border-gray-700 bg-gray-700 mr-4 rounded transition-all ease-in-out duration-200 pointer-events-none text-white hover:bg-gray-700 hover:text-white'>Low</button>}
                    </div>
                    <p>{primaryId}</p>
                    <p>{selectedTaskName}</p>
                    <p>{editDate}</p>
                    <p>{editStartTime}</p>
                    <p>{editEndTime}</p>

                    <div className='mt-7 flex items-center'>
                        <p>Date: </p>
                        <input type="date" className='outline-none p-1 ms-2' min={currentDate} value={editTaskDate} onChange={(e) => seteditTaskDate(e.target.value)} placeholder='Select Date' required />
                    </div>

                    <div className='mt-7 flex items-center'>
                        <p className='me-2'>Duration:</p>
                        <input type="time" className='border w-[130px] rounded border-[#333] outline-none py-1 px-2 text-[15px]' placeholder='12:00am' value={editdurationHr} onChange={(e) => seteditdurationHr(e.target.value)} required />
                        <span className='mx-3'> - </span>
                        <input type="time" className='border w-[130px] rounded border-[#333] outline-none py-1 px-2 text-[15px]' placeholder='2:00am' value={editdurationMin} onChange={(e) => seteditdurationMin(e.target.value)} required />
                    </div>

                    <div className='mt-16 flex justify-end'>
                        <button className='flex items-center bg-blue-900 ps-3 pe-4 py-[.45rem] rounded text-white' type='submit'>
                            <Icon icon="uil:edit" className='mr-2 text-lg' />
                            <span>Update Task </span>
                        </button>
                    </div>

                </form>
            </div>
        </div >
    )
}

export default EditTask