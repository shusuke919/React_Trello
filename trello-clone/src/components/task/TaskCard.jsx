import React from 'react'
import TaskAddInput from './input/TaskAddInput'
import TaskCardDeleteButton from '../button/TaskCardDeleteButton'
import TaskCardTitetle from './TaskCardTitetle'
import Tasks from './Tasks'
import { useState } from 'react'


const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className='taskCard'>
           <TaskCardTitetle />
           <TaskCardDeleteButton />
           <TaskAddInput 
              inputText={inputText} 
              setInputText={setInputText} 
              taskList={taskList}
              setTaskList={setTaskList}
            />
             <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default TaskCard
