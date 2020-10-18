import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length);
const App = (props) => {
  const [selected, setSelected] = useState(getRandomIndex());
  const [votes, setVotes] = useState(Array(6).fill(0));

  const handleNextAnecdote = () => {
    setSelected(getRandomIndex());
  };

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected]++;
    setVotes(copyVotes);
  };

  const getHighestVotesIndex = () => {
    let index = 0;
    let max = votes[0];
    votes.forEach((vote, i) => {
      if (vote > max) {
        index = i;
        max = vote;
      }
    });
    return index;
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[getHighestVotesIndex()]}</p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
