import { useLocation } from "react-router-dom";
import phone from "../../images/illustration-thank-you.svg";
import "../../styles/Result.css";

function Result() {
  let location = useLocation();

  return (
    <div className="result-page">
      <div className="result-page-form-container">
        <img src={phone} alt="picture"></img>
        <div className="rating-text-container">
          <p className="rating-text">
            You selected {location.state.rating} out of 5
          </p>
        </div>

        <h1 className="result-page-title">Thank you!</h1>
        <p className="result-page-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Result;
