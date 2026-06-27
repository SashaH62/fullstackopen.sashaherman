import { useState } from "react";

const Statistics = ({
  good,
  bad,
  neutral,
  total,
  average,
  positivePerc,
  useStatisticsTable,
}) => {
  if (!total) {
    return <p>No feedback had been given</p>;
  }

  if (useStatisticsTable) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>Good:</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral:</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad:</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>All:</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Average:</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>Percentage Positive:</td>
              <td>{positivePerc}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Percentage Positive" value={positivePerc + "%"} />
      </div>
    );
  }
};

const StatisticLine = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [useStatisticsTable, setUseStatisticsTable] = useState(true);

  const handleGoodRating = () => setGood(good + 1);
  const handleNeutralRating = () => setNeutral(neutral + 1);
  const handleBadRating = () => setBad(bad + 1);
  const handleStatisticsView = () => setUseStatisticsTable(!useStatisticsTable);
  const calcTotalFeedback = () => good + neutral + bad;
  const calcAverage = () => (good + bad * -1) / calcTotalFeedback() || 0;
  const calcPositive = () => (good / calcTotalFeedback()) * 100 || 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodRating} text="Good" />
      <Button onClick={handleNeutralRating} text="Neutral" />
      <Button onClick={handleBadRating} text="Bad" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={calcTotalFeedback()}
        average={calcAverage()}
        positivePerc={calcPositive()}
        useStatisticsTable={useStatisticsTable}
      />

      <Button onClick={handleStatisticsView} text="Switch Statistics View" />
    </div>
  );
};

export default App;
