import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListBook from "./list_book.jsx";
import Navbar from "./nav.jsx";

ReactDOM.render(
  <React.StrictMode>
      <div className="flex-colum h-screen w-screen bg-indigo-900 bg-opacity-80">
        <Navbar/>
        <ListBook/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);