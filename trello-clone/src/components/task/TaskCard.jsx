import { useState } from 'react'

import React from 'react'
import TaskAddInput from './input/TaskAddInput'
  
import { TaskCardDeleteButton } from "../button/TaskCardDeleteButton";
import TaskCardTitetle from './TaskCardTitetle'
import Tasks from './Tasks'


export const TaskCard = ({taskCardsList, setTaskCardsList, taskCard,}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
           <TaskCardTitetle />
           <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
           </div>
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
