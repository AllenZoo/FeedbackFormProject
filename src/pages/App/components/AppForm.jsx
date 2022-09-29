import React, { Component } from "react";
import AppFormTop from "./AppFormTop";

class AppForm extends Component {
  render() {
    return (
      <div className="app-form">
        <div className="padding"></div>
        <AppFormTop />
        <div className="padding"></div>
      </div>
    );
  }
}

export default AppForm;
