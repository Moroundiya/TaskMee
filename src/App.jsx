import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { AddTask } from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import EditTask from './components/EditTask';
// import { reactLocalStorage } from 'reactjs-localstorage';
// import useLocalStorage from 'react-use-localstorage';
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



  const storeLocalData = () => {
    const localData = localStorage.getItem('Tasks')

    if (localData) {
      return JSON.parse(localData)
    } else {
      return []

    }
  }


  // const storeLocalDataUpdate = () => {
  //   const localDataUpdate = localStorage.getItem('Updated')

  //   if (localDataUpdate) {
  //     return localDataUpdate
  //   } else {
  //     return []
  //   }
  // }

  const getThemeMode = () => {
    const getThemevalue = localStorage.getItem('theme')

    if (getThemevalue) {
      return getThemevalue
    }
  }

  const [theme, setTheme] = useState(getThemeMode);
  const taskDate = newDate.toDateString();
  const [task, setTask] = useState(storeLocalData);
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
  const [grabHr, setGrabHr] = useState()
  const [grabMin, setGrabMin] = useState()
  const [timeSplit, settimeSplit] = useState()
  const [selectedTaskName, setselectedTaskName] = useState()
  const [grabHrBooleanValue, setgrabHrBooleanValue] = useState()
  const [newChangeCompleted, setnewChangeCompleted] = useState()
  const [themeValue, setThemeValue] = useState()
  // const [newcompleteArray, setnewcompleteArray] = useState(storeLocalDataUpdate)
  // const [newcompleteArrayPro, setnewcompleteArrayPro] = useState()

  // const [nameSample, setnameSample] = useState();
  // let selectedTaskEach;




  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(task))

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setThemeValue(true)
    } else {
      document.documentElement.classList.remove('dark')
      setThemeValue(false)

    }


    console.log('theme is ' + theme)

    localStorage.setItem('theme', theme)
    // localStorage.setItem('Updated', JSON.stringify(newcompleteArray))
  }, [task, theme])


  const changeThemeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setNewValue(value)
    setAlltask(task)
    // setTask(newcompleteArray)
    // console.log(newcompleteArray)
    // console.log("new complete " + newcompleteArray)
    // setnewcompleteArrayPro(newcompleteArray)
    // console.log("newcompleteArray " + JSON.stringify(newcompleteArray))
    // console.log("newcompleteArrayPro " + newcompleteArrayPro)
    // console.log(newChangeCompleted)

    // console.log(reactLocalStorage.get('AllTask', JSON.parse(allTask)))

    // localStorage.setItem('Testing', JSON.stringify(nameSample))

    // console.log(JSON.parse(localStorage.getItem('allTask')))

  }, [value, priority, task, getDate, durationHr, durationMin, grabName, allTask, newChangeCompleted])
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
        taskMin: durationMin,
        // isCompleted: false
        isCompleted: newChangeCompleted
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
    setshowEdit('hidden')
    const selectedTaskUpdate = task.find((item) => item.id === idTaskValue);
    const currentTaskHrGrab = selectedTaskUpdate.durationHr

    if (grabName == '' || grabName == undefined) {
      // selectedTaskUpdate.taskName = 'Empty'
    } else {
      selectedTaskUpdate.taskName = grabName
    }


    if (grabDate == 'Invalid Date' || grabDate == undefined) {
      // selectedTaskUpdate.taskName = 'Empty'
    } else {
      selectedTaskUpdate.taskDate = grabDate
    }



    if (isNaN(grabMin)) {
      // selectedTaskUpdate.durationMin = 'Empty'
    } else {
      selectedTaskUpdate.durationMin = grabMin + 'min(s)'
    }

    setselectedTaskName(selectedTaskName)



    // console.log(grabHrBooleanValue)



    // const grabHrString = Number(grabHr)
    // 
    // console.log('currentTaskHrGrab is ' + currentTaskHrGrab)
    // console.log('grabHr is ' + grabHr)

    if (grabHrBooleanValue) {
      selectedTaskUpdate.durationHr = grabHr + 'hr(s)'
    } else {
      // selectedTaskUpdate.durationHr = 

    }
    // selectedTaskUpdate.durationHr = grabHr + 'hr(s)'

    // console.log('currentTaskHrGrab is ' + currentTaskHrGrab)


    localStorage.setItem('Tasks', JSON.stringify(allTask))



  }

  const editTaskBtn = (val) => {
    setshowEdit('flex');
    const selectedTaskEach = task.find((item) => item.id === val);
    setselectedTaskName(selectedTaskEach.taskName)

    setEditDate(selectedTaskEach.taskDate)

    setEditStartTime(selectedTaskEach.taskHr)
    setEditEndTime(selectedTaskEach.taskMin)
    // console.log(selectedTask)
    settaskEditArray(selectedTaskEach.id)

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

  const grabEdittedHr = (name) => {
    setGrabHr(name)
  }
  const grabEdittedMin = (name) => {
    setGrabMin(name)
  }

  const grabHrBoolean = (name) => {
    setgrabHrBooleanValue(name)
  }

  const grabDynamicComplete = (name) => {
    setnewChangeCompleted(name)
  }

  // const grabnewcompleteArray = (name) => {
  //   setnewcompleteArray(name)
  // }

  return (
    <div className='w-full min-h-screen bg-[#eee] dark:bg-[#0f172a] relative'>
      <div className={`absolute top-0 left-0 w-full z-30 h-full bg-[rgba(0,0,0,.4)] ${showModal} justify-center items-center px-4 sm:px-0 transition-all duration-300 ease-in-out`}>
        <div className='bg-white h-auto w-full sm:w-[600px] rounded-lg px-4 py-8 dark:bg-slate-800 dark:text-[#E2E8F0]'>
          <div className='flex justify-between items-center mb-5'>
            <p className='text-lg sm:text-xl'>Add Task</p>
            <Icon icon="ci:close-sm" className='text-3xl sm:text-4xl cursor-pointer -mr-2' onClick={() => setshowModal('hidden')} />
          </div>

          <form action="" onSubmit={addTaskModal}>
            <input type="text" name="" id="" className='w-full h-[45px] border-[#333333a9] border mt-5 outline-none px-2 rounded dark:text-black'
              placeholder='Task Name' value={value} onInput={(e) => { setValue(e.target.value); }} maxLength={17} required />
            <p className='mt-5 text-[#242121] text-md dark:text-[#E2E8F0]'>Priority</p>
            <div className='mt-3 text-[14.8px]'>
              <button className={high ? 'py-1 px-4 border bg-red-700 text-white border-red-700 mr-4 rounded transition-all ease-in-out duration-200 hover:bg-red-700 hover:text-whites' : 'py-1 px-4 border border-red-700 mr-4 rounded transition-all ease-in-out duration-200 text-red-700 hover:bg-red-700 hover:text-white'} onClick={() => setPriority('high')}>High</button>
              <button className={medium ? 'py-1 px-4 border border-orange-400 mr-4 bg-orange-400 text-white rounded transition-all ease-in-out duration-200 hover:bg-orange-400 hover:text-white' : 'py-1 px-4 border border-orange-400 mr-4 rounded transition-all ease-in-out duration-200 text-orange-400 hover:bg-orange-400 hover:text-white'} onClick={() => setPriority('medium')}>Medium</button>
              <button className={low ? 'py-1 px-4 border border-gray-700 bg-gray-700 mr-4 rounded transition-all ease-in-out duration-200 text-white hover:bg-gray-700 hover:text-white dark:text-gray-400 dark:border-gray-400' : 'py-1 px-4 border border-gray-700 mr-4 rounded transition-all ease-in-out duration-200 text-gray-700 hover:bg-gray-700 hover:text-white dark:text-gray-400 dark:border-gray-400'} onClick={() => setPriority('low')}>Low</button>
            </div>

            <div className='mt-7 flex items-center'>
              <p>Date: </p>
              <input type="date" className='outline-none p-1 ms-2 dark:text-black' value={getDate} min={currentDate} onChange={(e) => setgetDate(e.target.value)} placeholder='Select Date' required />
            </div>

            <div className='mt-7 flex items-center'>
              <p className='me-2'>Duration:</p>
              <input type="time" className='border w-[130px] rounded border-[#333] outline-none py-1 px-2 text-[15px] dark:text-black' placeholder='12:00am' value={durationHr} onChange={(e) => setdurationHr(e.target.value)} required />
              <span className='mx-3'> - </span>
              <input type="time" className='border w-[130px] rounded border-[#333] outline-none py-1 px-2 text-[15px] dark:text-black' placeholder='2:00am' value={durationMin} onChange={(e) => setdurationMin(e.target.value)} required />
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


      <EditTask showEdit={showEdit} timeSplit={timeSplit} currentId={taskEditArray} grabHrBoolean={grabHrBoolean} grabEdittedDate={grabEdittedDate} grabEdittedHr={grabEdittedHr} grabEdittedMin={grabEdittedMin} grabEdittedName={grabEdittedName} editTaskModal={editTaskModal} getdurationHr={getdurationHr} getdurationMin={getdurationMin} currentDate={currentDate} selectedTaskName={selectedTaskName} editTaskBtn={editTaskBtn} primaryId={taskEditArray} editName={editName} editDate={editDate} editStartTime={editStartTime} editEndTime={editEndTime} />
      {/* <EditTask showEdit={showEdit} editTaskModal={editTaskModal} editTaskBtn={editTaskBtn} primaryKey={task.id} /> */}

      <div className='sm:w-[600px] mx-auto pt-8 px-3 xl:pt-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-paci dark:text-[#E2E8F0]'>TaskMee</h1>
          <button className='bg-blue-900 px-2 py-[7px] sm:py-2 sm:px-4 cursor-pointer text-white rounded font-[acme] flex items-center' onClick={() => setshowModal('flex')}>
            <Icon icon="fa6-solid:plus" className='mr-2 sm:text-lg' />
            <span className='text-sm'>Add Task</span>
          </button>
        </div>


        <div className='mt-10 border-[#5957575f] border-t overflow-y-auto h-[450px] xl:h-[550px] w-full'>
          {task.map((taskElement, index) => <AddTask taskCompleteValue={taskElement.isCompleted} newValue={taskElement.taskName} taskList={task} taskIndex={index} grabDynamicComplete={grabDynamicComplete} editTaskBtn={editTaskBtn} allTaskList={allTask} getDate={taskElement.taskDate} selectedTaskID={taskElement.id} durationHr={taskElement.durationHr} durationMin={taskElement.durationMin} key={index} test={index} priority={taskElement.urgency} allTask={allTask} deletetask={deletetask} idValue={taskElement.id} setshowEdit={editTaskValue} />)}
        </div>


        <div className='flex flex-col items-center w-full mt-5'>
          <input type="checkbox" className="checkbox" id="checkbox" checked={themeValue} onChange={changeThemeMode} />
          <label for="checkbox" className="checkbox-label">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="ball"></span>
          </label>
        </div>
        <footer className='text-center pt-5 pb-4 dark:text-[#E2E8F0]'>
          Designed By: Moroundiya 😎
        </footer>
      </div>
    </div >

  )
}

export default App
