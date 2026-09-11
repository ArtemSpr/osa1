import "./App.css";

import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good * 100) / all;

  return (
    <div className="page">
      <div className="card">
        <p className="title">Give feedback</p>

        <div className="button-row">
          <div className="button good" onClick={() => setGood(good + 1)}>
            Good
          </div>
          <div
            className="button neutral"
            onClick={() => setNeutral(neutral + 1)}
          >
            Neutral
          </div>
          <div className="button bad" onClick={() => setBad(bad + 1)}>
            Bad
          </div>
        </div>

        <div className="divider"></div>

        <p className="stat-title">Statistic</p>

        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-label">Good</span>
            <span className="stat-count good">{good}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Neutral</span>
            <span className="stat-count neutral">{neutral}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Bad</span>
            <span className="stat-count bad">{bad}</span>
          </div>
        </div>

        <div className="divider"></div>
        <p className="stat-title">Detailed statistic</p>

        <div className="detailedStat-block">
          <span className="allStat">All: {all}</span>
          <span className="averageStat">
            Average: {all != 0 ? average.toFixed(2) : "No data"}
          </span>
          <span className="positiveStat">
            Positive:{" "}
            {all != 0
              ? positive.toFixed(1)
              : "There's no positive in this world"}
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
