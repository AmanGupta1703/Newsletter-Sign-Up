import { useReducer } from "react";
import { SignCard, SuccessCard } from "./components";

const initialState = { email: null, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "user/new_signup":
      return { ...state, email: action.payload, error: null };
    case "user/no_email":
      return { ...state, error: action.payload };
    case "user/dismiss":
      return { ...state, email: null, error: null };
    default:
      return state;
  }
}

function App() {
  const [{ email, error }, dispatch] = useReducer(reducer, initialState);
  return (
    <main className="main">
      {!email ? (
        <SignCard error={error} dispatch={dispatch} />
      ) : (
        <SuccessCard email={email} dispatch={dispatch} />
      )}
    </main>
  );
}

export default App;
