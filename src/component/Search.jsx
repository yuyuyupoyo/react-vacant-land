// Search.jsx
import React, { useState } from 'react';
import style from './Search.module.css';
import AddBtn from './AddBtn.jsx';
import SearchBox from './SearchBox.jsx';
import TodoList from './TodoList.jsx';

const MyApp = () => {
  const [text, setText] = useState(""); 
  const [todoList, setTodoList] = useState([]); 

  const handleAddClick = () => {
    if (text.trim()) { 
      console.log({text});
      console.log(todoList);
      setTodoList([...todoList, text]); 
      setText(""); 
    }
  };

  const handleDelete = (indexToDelete) => {
    console.log(indexToDelete);
    console.log(todoList);
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <div className={style.searchcontainer}>
        <SearchBox text={text} setText={setText} />
        <AddBtn onClick={handleAddClick} />
      </div>
      <div className={style.taskcontainer}>
        <TodoList items={todoList} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default MyApp;


