import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";

class AppFormButtons extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    rating: 0,
  };

  onValueChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
    // this.props.handleSubmit();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.selectedOption);
    this.props.navigate("result", {
      state: { rating: this.state.selectedOption },
    });
    //this.nav("/result", { state: { rating: this.state.selectedOption } });
    // window.history.push("/result");
    // history.pushState(this.state.selectedOption, "/result");
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
        {/* onSubmit={this.handleSubmit} */}
        <form className="app-form-form" onSubmit={this.handleSubmit}>
          <fieldset
            id="rating"
            className="app-form-button-list"
            ref={this.ratingRef}
          >
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.onValueChange}
              />
              <span>1</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="2"
                checked={this.state.selectedOption === "2"}
                onChange={this.onValueChange}
              />
              <span>2</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="3"
                checked={this.state.selectedOption === "3"}
                onChange={this.onValueChange}
              />
              <span>3</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="4"
                checked={this.state.selectedOption === "4"}
                onChange={this.onValueChange}
              />
              <span>4</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="5"
                checked={this.state.selectedOption === "5"}
                onChange={this.onValueChange}
              />
              <span>5</span>
            </label>
          </fieldset>
          <button className="app-form-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();
  return <AppFormButtons {...props} navigate={navigate} />;
}

export default WithNavigate;
