import { useState } from "react";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votedList, setVotedList] = useState([]);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const voteFunc = () => {
    setVotedList([...votedList, selected]);
    console.log("voted list:" + votedList);
  };

  const topAnecdoteFunc = () => {
    const counts = votedList.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    const mostFrequent =
      Object.keys(counts).length > 0
        ? Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b))
        : null;
    return <span className="topAnecdote">{anecdotes[mostFrequent]}</span>;
  };

  return (
    <div>
      <div className="card">
        <span className="title">Press a button and get a new anecdote</span>
        <span>{anecdotes[selected]}</span>

        <div className="buttons-row">
          <div className="button" onClick={() => randomAnecdote()}>
            New anecdote
          </div>
          <div className="button" onClick={() => voteFunc()}>
            Vote
          </div>
        </div>
        <div className="divider"></div>
        <div className="topAnecdote-block">
          <span className="title">The most popular anecdote</span>
          {topAnecdoteFunc()}
        </div>
      </div>
    </div>
  );
};

export default App;
