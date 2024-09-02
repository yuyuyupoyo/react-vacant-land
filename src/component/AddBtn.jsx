//AddBtn.jsx
import React from 'react';
import style from './AddBtn.module.css';

const AddBtn = ({ onClick }) => {
  return (
    <button className={style.addBtn} onClick={onClick}>
      追加
    </button>
  );
};

export default AddBtn;