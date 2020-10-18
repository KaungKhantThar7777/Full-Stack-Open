import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <h2>Statics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>

      <p>
        average {total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total}
      </p>
      <p>positive {total === 0 ? 0 : (good / total) * 100} % </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={() => setGood((good) => good + 1)}>Good</button>
      <button onClick={() => setNeutral((neutral) => neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad((bad) => bad + 1)}>Bad</button>

      <Statics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
