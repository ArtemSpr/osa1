import "./App.css";

import { useState } from "react";

const Button = (props) => {
  return props.title === "Good" ? (
    <div
      className="button good"
      onClick={() => props.setFunc(props.buttonTitle + 1)}
    >
      {props.title}
    </div>
  ) : props.title === "Neutral" ? (
    <div
      className="button neutral"
      onClick={() => props.setFunc(props.buttonTitle + 1)}
    >
      {props.title}
    </div>
  ) : props.title === "Bad" ? (
    <div
      className="button bad"
      onClick={() => props.setFunc(props.buttonTitle + 1)}
    >
      {props.title}
    </div>
  ) : (
    "Unknown"
  );
};

const StatisticLine = (props) => {
  return props.text === "Good" ? (
    <div className="stat-item">
      <span className="stat-label">{props.text}</span>
      <span className="stat-count good">{props.value}</span>
    </div>
  ) : props.text === "Neutral" ? (
    <div className="stat-item">
      <span className="stat-label">{props.text}</span>
      <span className="stat-count neutral">{props.value}</span>
    </div>
  ) : props.text === "Bad" ? (
    <div className="stat-item">
      <span className="stat-label">{props.text}</span>
      <span className="stat-count bad">{props.value}</span>
    </div>
  ) : (
    "Unknown"
  );
};

const Statistic = (props) => {
  return (
    <>
      <div className="divider"></div>
      <p className="stat-title">Statistic</p>

      <div className="stat-row">
        <StatisticLine text="Good" value={props.good}></StatisticLine>
        <StatisticLine text="Neutral" value={props.neutral}></StatisticLine>
        <StatisticLine text="Bad" value={props.bad}></StatisticLine>
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
          {/* <div className="button good" onClick={() => setGood(good + 1)}>
            Good
          </div> */}
          <Button buttonTitle={good} setFunc={setGood} title="Good"></Button>
          <Button
            buttonTitle={neutral}
            setFunc={setNeutral}
            title="Neutral"
          ></Button>
          <Button buttonTitle={bad} setFunc={setBad} title="Bad"></Button>
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
