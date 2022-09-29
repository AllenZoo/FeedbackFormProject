import "../../styles/App.css";
import Result from "../Result/Result";
import AppForm from "./components/AppForm";
import React, { Component } from "react";

class App extends Component {
  handleRating = (rating) => {
    this.props.handleRating(rating);
  };

  render() {
    return (
      <div className="App">
        <AppForm handleRating={this.props.handleRating} />
      </div>
    );
  }
}

export default App;
