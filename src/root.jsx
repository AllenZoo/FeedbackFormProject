import React, { Component } from "react";
import App from "./pages/App/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./pages/Result/Result";

class Root extends Component {
  state = {
    rating: 0,
  };

  handleRating = (newRating) => {
    console.log("YAY");
    this.setState({ rating: newRating });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App handleRating={this.handleRating} />} />
          <Route
            path="/result"
            element={<Result rating={this.state.rating} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default Root;
