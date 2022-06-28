import React from 'react'
import { useState } from 'react'

const TaskCardTitetle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
     setIsClick(true);
     console.log(isClick)
  };

  const handleChange = (e) => {
     setInputCardTitle(e.target.value);
    

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);

  };
  return (
    <div onClick={handleClick}>
      {/* 三項演算子 ?はtrue :はfalse */}
      {isClick ? (
          <form onSubmit={handleSubmit}>
           <input autoFocus 
                  type="text" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  value={inputCardTitle} 
                  maxLength="10"
                  />
          </form>
      ) : <h3>{inputCardTitle}</h3>}
      
    </div>
  );
};

export default TaskCardTitetle


