// import logo from './logo.svg';
import './App.css';
import {Component} from "react";


class App extends Component{
    constructor() {
        super();
        this.state = {
         monsters : [
           {
             id : 1,
             name : "Zombie"
           },{
             id : 2,
             name : "Edwood"
           },{
             id : 3,
             name : "Ojuju Calabar"
           },
         ]
        }
    }
  render() {
    return (
            <div className="App">
              {
                this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
              }
            </div>
        )
  }
}



export default App;
