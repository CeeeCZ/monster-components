import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'

export const App = () => {
  const [monsters, setMonsters] = useState();
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  axios.get("https://jsonplaceholder.typicode.com/users").then(response => setMonsters(response.data));

  useEffect(() => {
    if (monsters) {
      setFilteredMonsters(monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
      }))
    }
  }, [monsters, searchField])
  

  return (
    <>
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox placeholder="search monsters" handleChange={(e) => setSearchField(e.target.value)}/>
      {filteredMonsters && (
        <CardList monsters={filteredMonsters} search={searchField}>
    
        </CardList>
      )}
    </div>
    </>
  );
}
