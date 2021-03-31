import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
      .then(res => {
        setList(res.data.results)
      })
  }, [])

  return (
    <div className="App">
      <h1>Star Wars Films</h1>
      <div>
        {list.map((elem, i) => {
          return <ListItem key={i} title={elem.title} />
        })}
      </div>
    </div>
  );
}

export default App;
