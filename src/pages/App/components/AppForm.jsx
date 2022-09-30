import React, { Component } from "react";
import AppFormBottom from "./AppFormBottom";
import AppFormTop from "./AppFormTop";

class AppForm extends Component {
  render() {
    return (
      <div className="app-form">
        <AppFormTop />
        <AppFormBottom />
      </div>
    );
  }
}

export default AppForm;
