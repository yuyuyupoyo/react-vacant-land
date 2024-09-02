//SearchBox.jsx
import React from 'react';
import style from './SearchBox.module.css';

const SearchBox = ({ text, setText }) => {
  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      className={style.textBox} 
    />
  );
};

export default SearchBox;