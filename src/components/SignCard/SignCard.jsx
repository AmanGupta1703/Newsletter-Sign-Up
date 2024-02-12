import { IconList } from "../../assets";

// css
import "./SignCard.css";
import { useState } from "react";

function SignCard({ error, dispatch }) {
  const [emailAddress, setEmailAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailAddress) {
      dispatch({ type: "user/no_email", payload: "Valid email required." });
      return;
    }

    dispatch({ type: "user/new_signup", payload: emailAddress });
    setEmailAddress("");
  }

  function handleEmailChange(e) {
    setEmailAddress(e.target.value);
  }

  return (
    <article className="card card--signup">
      <div className="card__text-container">
        <h1 className="card__main-title">Stay updated!</h1>
        <h2 className="card__main-sibtitle">
          Join 60,000+ product managers receiving monthly updates on:
        </h2>
        <ul className="list">
          <li className="list__item">
            <img className="list__img" src={IconList} alt="" />
            <span className="list__text">
              Product discovery and building what matters
            </span>
          </li>
          <li className="list__item">
            <img className="list__img" src={IconList} alt="" />
            <span className="list__text">
              Measuring to ensure updates are a success
            </span>
          </li>
          <li className="list__item">
            <img className="list__img" src={IconList} alt="" />
            <span className="list__text">And much more!</span>
          </li>
        </ul>
        <form className="form form--signup" onSubmit={handleSubmit}>
          <label>
            <span
              className="form__label"
              style={{ color: error ? "var(--color-primary-01)" : "" }}
            >
              {error ? error : "Email address"}
            </span>
            <input
              type="email"
              className="form__input"
              placeholder="email@company.com"
              value={emailAddress}
              onChange={handleEmailChange}
            />
          </label>
          <button className="btn btn--signup">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="card__image-container">
        <div className="card__image" />
      </div>
    </article>
  );
}

export default SignCard;
