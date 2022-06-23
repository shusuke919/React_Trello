import react, {useState} from 'react';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
   const [items] = useState([
    
         { id: 0, text: "item1"}, 
         { id: 1, text: "item2"}, 
         { id: 2, text: "item3"}
        ]);
  
  const onDragEnd = (result) => {
    // console.log(result.source.index);
    // console.log(result.destination.index);

   const remove = items.splice(result.source.index, 1);
   items.splice(result.destination.index, 0, remove[0])
    
  };

  return (
    <div className='dragDropArea'>
      <DragDropContext onDragEnd={onDragEnd}>
      {/* onDragEndはdragを話したら作動するプロパティ　で関数を呼んでいる */}
        <Droppable droppableId='droppable'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
        
        {items.map((item, index) => (
          <Draggable draggableId={item.text} index={index} key={item.id}>
        {(provided) => (
          <div className='item'
          
                  ref={provided.innerRef} 
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps}
                  >
                    {item.text}
                    </div>
          // dragHandlePropsで要素を掴んで実際に動かせるようになる
        )}
        </Draggable>

        ))}
        
       
       
         {provided.placeholder}
         {/* placeholder　Droppableの領域を広げることができる→お作法で必要 */}
        </div>

        )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
