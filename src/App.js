// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBoxComponent} from "./components/search-box/search-box.component";


// Switch to Functional Component
const App = () => {
  // [value, setValue] = useState('initial state')
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  const handleChange = (event) => {
    const searchFieldString = event.target.value;
    // this only rerender component if searchFieldString is different from the initial state of searchField
    setSearchField(searchFieldString) // setState equivalent,
  }

  // Filter Monsters only when monsters array or search field changes
  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])


  return (
    <div className="App">
      <h1>Monsters Rolodex </h1>
      <SearchBoxComponent placeholder='Search Monsters' HandleChange={handleChange}/>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
