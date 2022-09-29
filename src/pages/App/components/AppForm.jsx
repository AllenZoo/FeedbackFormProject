import React, { Component } from "react";
import AppFormBottom from "./AppFormBottom";
import AppFormTop from "./AppFormTop";

class AppForm extends Component {
  handleRating = (rating) => {
    this.props.handleRating(rating);
  };

  render() {
    return (
      <div className="app-form">
        <AppFormTop />
        <AppFormBottom handleRating={this.props.handleRating} />
      </div>
    );
  }
}

export default AppForm;
