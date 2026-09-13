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
    <tr className="stat-item">
      <td className="stat-label">{props.text}</td>
      <td className="stat-count good">{props.value}</td>
    </tr>
  ) : props.text === "Neutral" ? (
    <tr className="stat-item">
      <td className="stat-label">{props.text}</td>
      <td className="stat-count neutral">{props.value}</td>
    </tr>
  ) : props.text === "Bad" ? (
    <tr className="stat-item">
      <td className="stat-label">{props.text}</td>
      <td className="stat-count bad">{props.value}</td>
    </tr>
  ) : (
    "Unknown"
  );
};

const Statistic = (props) => {
  return (
    <>
      <div className="divider"></div>
      <table>
        <thead>
          <tr>
            <td>Statistics</td>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="Good" value={props.good} className="good" />
          <StatisticLine
            text="Neutral"
            value={props.neutral}
            className="neutral"
          />
          <StatisticLine text="Bad" value={props.bad} className="bad" />
        </tbody>

        <thead>
          <tr>
            <td colSpan="2">Detailed Statistics</td>
          </tr>
        </thead>
        <tbody className="detailedStat-block">
          <tr className="allStat">
            <td>All</td>
            <td>{props.all}</td>
          </tr>
          <tr className="averageStat">
            <td>Average</td>
            <td>{props.all !== 0 ? props.average.toFixed(2) : "No data"}</td>
          </tr>
          <tr className="positiveStat">
            <td>Positive</td>
            <td>
              {props.all !== 0 ? props.positive.toFixed(1) + "%" : "No data"}
            </td>
          </tr>
        </tbody>
      </table>
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
