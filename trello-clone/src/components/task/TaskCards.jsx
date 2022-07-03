import React from 'react'
import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import AddTaskCardButton from '../button/AddTaskCardButton'
import TaskCard from './TaskCard'

const reorder = (taskCardsList, startIndex, endIndex) => {
  // タスクを並び替える
  const remove = taskCardsList.splice(startIndex, 1);//[2,3]
  console.log(remove);
  taskCardsList.splice(endIndex, 0, remove[0]);//[2,1,3]
};

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id:"0",
    draggableId: "item0"
  },]);

const handleDragEnd = (e) => {
  reorder(taskCardsList, e.source.index, e.destination.index)

  setTaskCardsList(taskCardsList);
};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (  
        
        <div className="taskCardsArea" {...provided.droppableProps}ref={provided.innerRef}>
      {taskCardsList.map((taskCard, index) => (

     
      <TaskCard 
      key={taskCard.id}
      index={index}
      taskCardsList={taskCardsList}
      setTaskCardsList={setTaskCardsList}
      taskCard={taskCard}/>

      ))}
      {provided.placeholder}
      <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}/>
    </div>
    
    )}
  
    </Droppable>
    </DragDropContext>
  )
}

export default TaskCards
