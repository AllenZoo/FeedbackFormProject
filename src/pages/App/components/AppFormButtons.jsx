import React, { Component } from "react";

class AppFormButtons extends Component {
  state = {
    rating: 0,
  };
  render() {
    return (
      <div className="app-form-buttons-container">
        {/* <ul>
          <li className="app-form-button-list">
            <button className="app-form-button">1</button>
            <button className="app-form-button">2</button>
            <button className="app-form-button">3</button>
            <button className="app-form-button">4</button>
            <button className="app-form-button-selected">5</button>
          </li>
        </ul> */}

        <form className="app-form-form">
          <fieldset id="group1" className="app-form-button-list">
            <label className="radio-button-container">
              <input type="radio" name="group1" value="1" />
              <span>1</span>
            </label>
            <label className="radio-button-container">
              <input type="radio" name="group1" value="2" />
              <span>2</span>
            </label>
            <label className="radio-button-container">
              <input type="radio" name="group1" value="3" />
              <span>3</span>
            </label>
            <label className="radio-button-container">
              <input type="radio" name="group1" value="4" />
              <span>4</span>
            </label>
            <label className="radio-button-container">
              <input type="radio" name="group1" value="5" />
              <span>5</span>
            </label>
          </fieldset>
          <button className="app-form-submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default AppFormButtons;
