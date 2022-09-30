import "../../styles/App.css";
import AppForm from "./components/AppForm";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppForm />
      </div>
    );
  }
}

export default App;
