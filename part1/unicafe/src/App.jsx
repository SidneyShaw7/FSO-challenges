import { useState } from "react";

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <>
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  </>
);

const Statistics = ({ good, neutral, bad, total }) => {
  const avVal = (good - bad) / total;
  const posVal = (good / total) * 100;

  const average = Math.round(avVal * 100) / 100;
  const positive = Math.round(posVal * 100) / 100;
  return total === 0 ? (
    <div>
      <h2>Statistics</h2>
      <h3>No feedback given</h3>
    </div>
  ) : (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [total, setTotal] = useState(0);

  const totalPlus = () => setTotal(total + 1);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    totalPlus();
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    totalPlus();
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    totalPlus();
  };
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button clickHandler={handleGood} text="good" />
      <Button clickHandler={handleNeutral} text="neutral" />
      <Button clickHandler={handleBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
