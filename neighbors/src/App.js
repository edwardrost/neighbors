import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      neighbors: [],
      searchField: '',
    }
   }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({neighbors: users}));
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { neighbors, searchField} = this.state;
    const filteredNeighbors = neighbors.filter(
      neighbor => neighbor.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>My Neighbors</h1>
        <SearchBox 
          placeholder='search neighbors' 
          handleChange={this.handleChange}
        />
        <CardList neighbors={filteredNeighbors} />
      </div>
    );
  };
}

export default App;
