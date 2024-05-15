import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { AddTask } from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import EditTask from './components/EditTask';
uuidv4();

function App() {

  const newDate = new Date();

  const dateYear = newDate.getFullYear()
  let dateMonth = newDate.getMonth() + 1
  let dateDay = newDate.getDate()

  let dateMonthDetect, dateDayDetect

  if (dateMonth.toString().length < 2) {
    dateMonthDetect = '0' + dateMonth
  } else {
    dateMonthDetect = dateMonth
  }

  if (dateDay.toString().length < 2) {
    dateDayDetect = '0' + dateDay
  } else {
    dateDayDetect = dateDay

  }

  const currentDate = dateYear + '-' + dateMonthDetect + '-' + dateDayDetect

  const taskDate = newDate.toDateString();
  const [task, setTask] = useState([]);
  const [taskEditArray, settaskEditArray] = useState();
  const [editName, setEditName] = useState();
  const [editDate, setEditDate] = useState();
  const [editStartTime, setEditStartTime] = useState();
  const [editEndTime, setEditEndTime] = useState();
  const [getDate, setgetDate] = useState();
  let taskname, taskpriority, high, medium, low;
  const [value, setValue] = useState();
  const [duration, setDuration] = useState();
  const [showModal, setshowModal] = useState('hidden');
  const [showEdit, setshowEdit] = useState('hidden');
  const [newValue, setNewValue] = useState();
  const [priority, setPriority] = useState();
  const [durationHr, setdurationHr] = useState();
  const [getdurationHr, setgetdurationHr] = useState();
  const [getdurationMin, setgetdurationMin] = useState();
  const [durationMin, setdurationMin] = useState();
  const [allTask, setAlltask] = useState([])
  const [grabName, setGrabName] = useState()
  const [grabDate, setGrabDate] = useState()
  const [timeSplit, settimeSplit] = useState()
  const [selectedTaskName, setselectedTaskName] = useState()
  // let selectedTaskEach;


  useEffect(() => {
    setNewValue(value)
    setAlltask(task)
    // setgetdurationHr(durationHr)
    console.log(getdurationHr)
    console.log(getdurationMin)


    // settimeSplit(editDate)
    // console.log('timeSplit ' + timeSplit)
    // console.log(clearName)

    // setselectedTask(selectedTaskEach)

    // console.log(selectedTaskEach)

    // setEditName(selectedTaskEach.taskName)
    // setEditDate(selectedTaskEach.taskDate)
    // setEditStartTime(selectedTaskEach.taskHr)
    // setEditEndTime(selectedTaskEach.taskMin)
    // console.log(editName, editDate, editStartTime, editEndTime)
    // console.log(selectedTaskEach)
    // console.log(getDate)
  }, [value, priority, task, getDate, durationHr, durationMin, grabName])
  function addTaskModal(e) {
    e.preventDefault();
    const durationHrValue = durationHr.split(':');
    const durationMinValue = durationMin.split(':');
    const newHr = durationHrValue[0] - durationMinValue[0]
    const newMin = durationHrValue[1] - durationMinValue[1]
    const newHrValue = Math.abs(newHr)
    const newMinValue = Math.abs(newMin)
    // console.log(newMinValue)

    // const totalTime = 'Hello'

    setTask(task => [
      ...task,
      {
        id: uuidv4(),
        taskName: newValue,
        urgency: priority,
        taskDate: getDate,
        durationHr: newHrValue + 'hr(s)',
        durationMin: newMinValue + 'min(s)',
        taskHr: durationHr,
        taskMin: durationMin
      },
    ]);
    setshowModal('hidden');
    setValue('');
    setPriority('');
    setgetDate('');
    setdurationHr('');
    setdurationMin('')

    setgetdurationHr(durationHr)
    setgetdurationMin(durationMin)
  }


  const editTaskModal = (e, idTaskValue) => {
    e.preventDefault();
    // console.log("Submitted")
    setshowEdit('hidden')
    console.log(idTaskValue)
    const selectedTaskUpdate = task.find((item) => item.id === idTaskValue);
    selectedTaskUpdate.taskName = grabName
    selectedTaskUpdate.taskDate = grabDate
    setselectedTaskName(selectedTaskName)
    // setselectedTaskName(selectedTaskName)
    // setGrabName('')
    // setselectedTaskName(selectedTaskEach.taskName)
    // setGrabDate('')
  }

  const editTaskBtn = (val) => {
    setshowEdit('flex');
    const selectedTaskEach = task.find((item) => item.id === val);
    setselectedTaskName(selectedTaskEach.taskName)


    // setEditName(selectedTaskEach.taskName)
    setEditDate(selectedTaskEach.taskDate)
    // const selectedTaskSplit = selectedTaskEach.taskDate.split('-')
    // const selectedTaskSplitYear = selectedTaskSplit[0]
    // const selectedTaskSplitMonth = selectedTaskSplit[1]
    // const selectedTaskSplitDay = selectedTaskSplit[2]
    // const selectedTaskSplitAll = selectedTaskSplitMonth + '-' + selectedTaskSplitDay + '-' + selectedTaskSplitYear

    // settimeSplit(selectedTaskSplitAll)
    // const 
    setEditStartTime(selectedTaskEach.taskHr)
    setEditEndTime(selectedTaskEach.taskMin)
    // console.log(selectedTask)
    settaskEditArray(selectedTaskEach.id)
    // console.log('yes' + selectedTaskEach.taskName)
    // console.log(val)
    // <EditTask showEdit={showEdit} editTaskModal={editTaskModal} editTaskBtn={editTaskBtn} selectedTaskID={task.id} newValue={task.taskName} getDate={task.taskDate} priority={task.urgency} taskHr={task.taskHr} taskMin={task.taskMin} />

    // const selectedTaskList = allTask.filter((item) => item.id === taskVal)
    // setselectedTask(selectedTaskList)
    // task.map((task) => console.log(task.taskName))


  }




  if (priority == 'high') high = true
  if (priority == 'medium') medium = true
  if (priority == 'low') low = true


  const deletetask = (val) => {
    const newList = allTask.filter((item) => item.id !== val)
    setTask(newList)
  }


  const editTaskValue = (val) => {
    setshowEdit(val)
  }

  const editSelectedTask = () => {
  }

  const grabEdittedName = (name) => {
    setGrabName(name)
  }
  const grabEdittedDate = (name) => {
    setGrabDate(name)
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
              <input type="date" className='outline-none p-1 ms-2' value={getDate} min={currentDate} onChange={(e) => setgetDate(e.target.value)} placeholder='Select Date' required />
            </div>

            <div className='mt-7 flex items-center'>
              <p className='me-2'>Duration:</p>
              <input type="time" className='border w-[130px] rounded border-[#333] outline-none py-1 px-2 text-[15px]' placeholder='12:00am' value={durationHr} onChange={(e) => setdurationHr(e.target.value)} required />
              <span className='mx-3'> - </span>
              <input type="time" className='border w-[130px] rounded border-[#333] outline-none py-1 px-2 text-[15px]' placeholder='2:00am' value={durationMin} onChange={(e) => setdurationMin(e.target.value)} required />
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



      {/* Edit Component  */}


      <EditTask showEdit={showEdit} timeSplit={timeSplit} currentId={taskEditArray} grabEdittedDate={grabEdittedDate} grabEdittedName={grabEdittedName} editTaskModal={editTaskModal} getdurationHr={getdurationHr} getdurationMin={getdurationMin} currentDate={currentDate} selectedTaskName={selectedTaskName} editTaskBtn={editTaskBtn} primaryId={taskEditArray} editName={editName} editDate={editDate} editStartTime={editStartTime} editEndTime={editEndTime} />
      {/* <EditTask showEdit={showEdit} editTaskModal={editTaskModal} editTaskBtn={editTaskBtn} primaryKey={task.id} /> */}

      <div className='sm:w-[600px] mx-auto pt-8 px-3 xl:pt-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-paci'>TaskMee</h1>
          <button className='bg-blue-900 px-2 py-[7px] sm:py-2 sm:px-4 cursor-pointer text-white rounded font-[acme] flex items-center' onClick={() => setshowModal('flex')}>
            <Icon icon="fa6-solid:plus" className='mr-2 sm:text-lg' />
            <span className='text-sm'>Add Task</span>
          </button>
        </div>


        <div className='mt-10 border-[#5957575f] border-t overflow-y-auto h-[550px] w-full'>
          {task.map((task, index) => <AddTask newValue={task.taskName} editTaskBtn={editTaskBtn} getDate={task.taskDate} selectedTaskID={task.id} durationHr={task.durationHr} durationMin={task.durationMin} key={index} test={index} priority={task.urgency} allTask={allTask} deletetask={deletetask} idValue={task.id} setshowEdit={editTaskValue} />)}
        </div>

        <footer className='text-center pt-5'>
          Designed By: Moroundiya 😎
        </footer>
      </div>
    </div >

  )
}

export default App
