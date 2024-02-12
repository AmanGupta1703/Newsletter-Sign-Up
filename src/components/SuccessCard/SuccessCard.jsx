import { IconSucess } from "../../assets/";

import "./SuccessCard.css";

function SuccessCard({ email, dispatch }) {
  return (
    <div className="card card--success">
      <div className="card__body">
        <img src={IconSucess} alt="Success Icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <strong> {email}</strong>. Please open it and click the button inside
          to confirm your subscription.
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "user/dismiss" })}
        className="btn btn--dismiss"
      >
        Dismiss message
      </button>
    </div>
  );
}

export default SuccessCard;
