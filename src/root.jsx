import React, { Component } from "react";
import App from "./pages/App/App";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./pages/Result/Result";

class Root extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App handleRating={this.handleRating} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    );
  }
}

export default Root;
