import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { AddTask } from './components/AddTask';

function App() {

  const newDate = new Date();

  const taskDate = newDate.toDateString();
  const [task, setTask] = useState([]);
  const [getDate, setgetDate] = useState();
  let taskname, taskpriority, high, medium, low;
  const [value, setValue] = useState();
  const [duration, setDuration] = useState();
  const [showModal, setshowModal] = useState('hidden');
  const [newValue, setNewValue] = useState();
  const [priority, setPriority] = useState();
  const [initialtime, setinitialtime] = useState();
  const [deadlinetime, setdeadlinetime] = useState();

  useEffect(() => {
    setNewValue(value)
    // console.log(priority)
    console.log(task)
    // console.log(getDate)
  }, [value, priority, task, getDate, initialtime, deadlinetime])


  function addTaskModal(e) {

    e.preventDefault();

    setTask(task => [
      ...task,
      {
        taskName: newValue,
        urgency: priority,
        taskDate: getDate,
        durationFrom: initialtime,
        durationTo: deadlinetime
      },
    ]);
    setshowModal('hidden');
    setValue('');
    setPriority('');
    setgetDate('');
    setinitialtime('');
    setdeadlinetime('')
    // setPriority();

    console.log(value)
    console.log(priority)

  }

  if (priority == 'high') high = true
  if (priority == 'medium') medium = true
  if (priority == 'low') low = true


  function showArray() {

  }



  return (
    <div className='w-full h-full bg-[#eee] relative'>
      <div className={`absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] ${showModal} justify-center items-center px-4 sm:px-0 transition-all duration-300 ease-in-out`}>

        <div className='bg-white h-auto w-full sm:w-[600px] rounded-lg px-4 py-8'>
          <div className='flex justify-between items-center mb-5'>
            <p className='text-lg sm:text-xl'>Add Task</p>
            <Icon icon="ci:close-sm" className='text-3xl sm:text-4xl cursor-pointer -mr-2' onClick={() => setshowModal('hidden')} />
          </div>

          <form action="" onSubmit={addTaskModal}>
            <input type="text" name="" id="" className='w-full h-[45px] border-[#333333a9] border mt-5 outline-none px-2 rounded'
              placeholder='Task Name' value={value} onInput={(e) => { setValue(e.target.value); }} maxLength={17} required />
            <p className='mt-5 text-[#242121] text-md'>Priority</p>
            <div className='mt-3 text-[14.8px]'>
              <button className={high ? 'py-1 px-4 border bg-red-700 text-white border-red-700 mr-4 rounded transition-all ease-in-out duration-200 hover:bg-red-700 hover:text-whites' : 'py-1 px-4 border border-red-700 mr-4 rounded transition-all ease-in-out duration-200 text-red-700 hover:bg-red-700 hover:text-white'} onClick={() => setPriority('high')}>High</button>
              <button className={medium ? 'py-1 px-4 border border-orange-400 mr-4 bg-orange-400 text-white rounded transition-all ease-in-out duration-200 hover:bg-orange-400 hover:text-white' : 'py-1 px-4 border border-orange-400 mr-4 rounded transition-all ease-in-out duration-200 text-orange-400 hover:bg-orange-400 hover:text-white'} onClick={() => setPriority('medium')}>Medium</button>
              <button className={low ? 'py-1 px-4 border border-gray-700 bg-gray-700 mr-4 rounded transition-all ease-in-out duration-200 text-white hover:bg-gray-700 hover:text-white' : 'py-1 px-4 border border-gray-700 mr-4 rounded transition-all ease-in-out duration-200 text-gray-700 hover:bg-gray-700 hover:text-white'} onClick={() => setPriority('low')}>Low</button>
            </div>

            <div className='mt-7 flex items-center'>
              <p>Date: </p>
              <input type="date" className='outline-none p-1 ms-2' value={getDate} onChange={(e) => setgetDate(e.target.value)} placeholder='Select Date' required />
            </div>

            <div className='mt-7 flex items-center'>
              <p className='me-2'>Duration:</p>
              <input type="text" className='border w-[80px] rounded border-[#333] outline-none py-1 px-2 text-[15px]' placeholder='12:00am' value={initialtime} onChange={(e) => setinitialtime(e.target.value)} required />
              <span className='mx-3'> - </span>
              <input type="text" className='border w-[80px] rounded border-[#333] outline-none py-1 px-2 text-[15px]' placeholder='2:00am' value={deadlinetime} onChange={(e) => setdeadlinetime(e.target.value)} required />
            </div>

            <div className='mt-16 flex justify-end'>
              <button className='flex items-center bg-blue-900 ps-3 pe-4 py-[.45rem] rounded text-white' type='submit'>
                <Icon icon="fa6-solid:plus" className='mr-2 text-lg' />
                <span>Add Task Now</span>
              </button>
            </div>

          </form>
        </div>
      </div>



      <div className='sm:w-[600px] mx-auto pt-8 px-3 xl:pt-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-paci'>TaskMee</h1>
          <button className='bg-blue-900 px-2 py-[7px] sm:py-2 sm:px-4 cursor-pointer text-white rounded font-[acme] flex items-center' onClick={() => setshowModal('flex')}>
            <Icon icon="fa6-solid:plus" className='mr-2 sm:text-lg' />
            <span className='text-sm'>Add Task</span>
          </button>
        </div>


        <div className='mt-10 border-[#5957575f] border-t overflow-y-auto h-[550px] w-full'>
          {task.map((task) => <AddTask newValue={task.taskName} getDate={task.taskDate} initialtime={task.durationFrom} deadlinetime={task.durationTo} key={task.newValue} priority={task.urgency} />)}
        </div>

        <footer className='text-center pt-5'>
          Designed By: Moroundiya 😎
        </footer>
      </div>
    </div >

  )
}

export default App
