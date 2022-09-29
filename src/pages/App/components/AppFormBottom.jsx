import React, { Component } from "react";
import AppFormButtons from "./AppFormButtons";

class AppFormBottom extends Component {
  handleRating = (rating) => {
    this.props.handleRating(rating);
  };
  render() {
    return (
      <div>
        <AppFormButtons handleRating={this.props.handleRating}></AppFormButtons>
      </div>
    );
  }
}

export default AppFormBottom;
