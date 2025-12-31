import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (
  {
    good,
    neutral,
    bad,
    total,
    average,
    positive
  }
) => {
  return (
    <>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = Number.isNaN((good * 1 + neutral * 0 + bad * -1)/total) ? 0 : (good * 1 + neutral * 0 + bad * -1)/total
  const positivePercentage = Number.isNaN(good/total * 100) ? 0 : good/total * 100

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button 
        onClick={handleGoodClick} 
        text='good'
      />
      <Button
        onClick={handleNeutralClick}
        text='neutral'
      />
      <Button
        onClick={handleBadClick}
        text='bad'
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positivePercentage}
      />
    </div>
  )
}

export default App