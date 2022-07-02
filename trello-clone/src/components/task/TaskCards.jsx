import React from 'react'
import { useState } from 'react'
import AddTaskCardButton from '../button/AddTaskCardButton'
import TaskCard from './TaskCard'



const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id:0,
    draggableId: "item0"
  },]);
  return (
    
    <div className="taskCardsArea">
      {taskCardsList.map((taskCard) => (

     
      <TaskCard 
      key={taskCard.id}
      taskCardsList={taskCardsList}
      setTaskCardsList={setTaskCardsList}
      taskCard={taskCard}/>

      ))}

      <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}/>
    </div>
  )
}

export default TaskCards
