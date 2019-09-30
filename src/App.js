import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ cats: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredCats = this.state.cats.filter(cats => {
      return cats.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="light-pink">Meet my cat friends!</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </div>
    );
  }
}

export default App;
