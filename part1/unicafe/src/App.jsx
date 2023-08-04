import { useState } from "react";

const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Statistics = ({ text, rating }) => {
  return (
    <p>
      {text}: {rating}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [total, setTotal] = useState(0);

  const totalPlus = () => setTotal(total + 1);

  const average = () => (good - bad) / total;

  const positive = () => (good / total) * 100;

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
      <h2>Statistics</h2>
      <Statistics rating={good} text="good" />
      <Statistics rating={neutral} text="neutral" />
      <Statistics rating={bad} text="bad" />
      <p>Total: {total}</p>
      <p>Average: {average()}</p>
      <p>Positive: {positive()}</p>
    </div>
  );
};

export default App;
