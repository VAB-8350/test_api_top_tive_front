import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListBook from "./list_book.jsx";


ReactDOM.render(
  <React.StrictMode>
    <div className="flex h-screen w-screen bg-indigo-300">
      <ListBook/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);