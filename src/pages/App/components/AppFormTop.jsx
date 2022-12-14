import "../../../styles/App.css";
import "../../../styles/general.css";
import star from "../../../images/icon-star.svg";

function AppFormTop() {
  return (
    <div className="app-form-top">
      <div className="star-icon-container">
        <img src={star} id="star-icon" alt="star-icon"></img>
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

export default AppFormTop;
