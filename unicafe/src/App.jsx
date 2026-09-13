import "./App.css";

import { useState } from "react";

const Statistic = (props) => {
  return (
    <>
      <div className="divider"></div>
      <p className="stat-title">Statistic</p>

      <div className="stat-row">
        <div className="stat-item">
          <span className="stat-label">Good</span>
          <span className="stat-count good">{props.good}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Neutral</span>
          <span className="stat-count neutral">{props.neutral}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Bad</span>
          <span className="stat-count bad">{props.bad}</span>
        </div>
      </div>

      <div className="divider"></div>
      <p className="stat-title">Detailed statistic</p>

      <div className="detailedStat-block">
        <span className="allStat">All: {props.all}</span>
        <span className="averageStat">
          Average: {props.all != 0 ? props.average.toFixed(2) : "No data"}
        </span>
        <span className="positiveStat">
          Positive:{" "}
          {props.all != 0 ? props.positive.toFixed(1) + "%" : "No data"}
        </span>
      </div>
    </>
  );
};

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

        {all !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positive={positive}
          ></Statistic>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
