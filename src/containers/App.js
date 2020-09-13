import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Loading from "../components/Loading";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

// Smart Component -> state
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch -> to make requests to the server
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  // every time the state changes, we run render() again.

  // if this is self-defined methods, you need to use this syntax
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // if robots are loading too slow
    if (!robots.length) {
      return (
        <div className="tc ma5">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="tc ma5">
          <h1>RoboFriends</h1>
          <ErrorBoundry>
            <SearchBox searchChange={this.onSearchChange} />
          </ErrorBoundry>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
