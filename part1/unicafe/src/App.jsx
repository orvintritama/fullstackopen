import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);

    const total = updatedGood+neutral+bad;
    setTotal(total);
    
    const average = calculateAverage(updatedGood, neutral, bad, total);
    setAverage(average);

    const positive = calculatePositive(updatedGood, total);
    setPositive(positive);
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);

    const total = updatedNeutral + good + bad;
    setTotal(total);

    const average = calculateAverage(good, updatedNeutral, bad, total);
    setAverage(average);

    const positive = calculatePositive(good, total);
    setPositive(positive);
  }
  
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);

    const total = updatedBad + good + neutral;
    setTotal(total);

    const average = calculateAverage(good, neutral, updatedBad, total);
    setAverage(average);

    const positive = calculatePositive(good, total);
    setPositive(positive);
  }

  const calculateAverage = (goodCount, neutralCount, badCount, total) => {
    return (goodCount*1 + neutralCount*0 + badCount*-1) / total;
  }

  const calculatePositive = (goodCount, total) => {
    return (goodCount / total) * 100;
  }

  return (
    <div>
      <Header title="give feedback"></Header>
      <Button handleClick={handleGoodClick} text="good"></Button>
      <Button handleClick={handleNeutralClick} text="neutral"></Button>
      <Button handleClick={handleBadClick} text="bad"></Button>
      <Header title="Statistics"></Header>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default App