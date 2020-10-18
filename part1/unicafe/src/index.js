import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No Feedback Given</p>
      ) : (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic
              text="average"
              value={(good * 1 + neutral * 0 + bad * -1) / total}
            />
            <Statistic text="positive" value={`${(good / total) * 100} %`} />
          </tbody>
        </table>
      )}
    </>
  );
};

const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
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
      <Button handleClick={() => setGood((good) => good + 1)}>Good</Button>
      <Button handleClick={() => setNeutral((neutral) => neutral + 1)}>
        Neutral
      </Button>
      <Button handleClick={() => setBad((bad) => bad + 1)}>Bad</Button>

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
