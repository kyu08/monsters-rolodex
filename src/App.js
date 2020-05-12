 import React, { Component } from 'react';
import {CardList} from "./compnoents/card-list/card-list.component";
import {SearchBox} from "./compnoents/search-box/search-box.component";
 import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(m => 
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="monster sagasu"
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList
          monsters={filteredMonster}
        />
      </div>
  )}
}

export default App;
