// import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBoxComponent} from "./components/search-box/search-box.component";


class App extends Component{
    constructor() {
        super();
        this.state = {
         monsters : [],
          searchField : ""
        }
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters : users}))
    }

  render() {
      // Destructuring - Remember we don't mutate the state directly
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
            <div className="App">
              <SearchBoxComponent placeholder='Search Monsters' HandleChange={e => this.setState({searchField : e.target.value})}/>
              <CardList monsters={filteredMonsters} >
              </CardList>
            </div>
        )
  }
}



export default App;
