import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const reorder = (taskList, startIndex, endIndex) => {
   // タスクを並び替える
   const remove = taskList.splice(startIndex, 1);//[2,3]
   console.log(remove);
   taskList.splice(endIndex, 0, remove[0]);//[2,1,3]
};

const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (e) => {
    // console.log(e)
   

    reorder(taskList, e.source.index, e.destination.index)

    setTaskList(taskList);
  };

  return (
    <div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
      {taskList.map((task, index) => (
        <div key={task.id}>
        
          <Task index={index} task={task} setTaskList={setTaskList} taskList={taskList} />
        </div>
      ))}
      {provided.placeholder}
      </div>
      )}
      </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks

