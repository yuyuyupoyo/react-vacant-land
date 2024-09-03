// TodoList.jsx
import React from 'react';
import style from './TodoList.module.css';

const TodoList = ({ items, onDelete }) => {

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={style.taskcontainer}>
          <button className={style.deleteBtn} onClick={() => onDelete(index)}>
          X
          </button>
          <input type="text" value={item} className={style.addBox} readOnly />
        </div>
      ))}
    </div>
  );
};

export default TodoList;