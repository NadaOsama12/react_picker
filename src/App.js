// import './App.css';
import React, { useState } from 'react';
import Papa from 'papaparse';
import RandomPicker from './RandomPicker';

function App() {
  const [data, setData] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        setData(results.data);
      },
    });
  };
  const namesList = [
    'Marcelo',
    'Lizzette',
    'Pauline',
    'Fumiko',
    'Tomasa',
    'Bertha',
    'Antoinette',
    'Tianna',
    'Ammie',
    'Victorina',
    'Marlon',
    'Jules',
    'Arletha',
    'Ellyn',
    'Karol',
    'Corrin',
    'Josephine',
  ];
  return (
    <div>
      {/* File Uploader */}
      <input
        type='file'
        name='file'
        accept='.csv'
        onChange={changeHandler}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <RandomPicker items={namesList} />
    </div>
  );
}

export default App;
