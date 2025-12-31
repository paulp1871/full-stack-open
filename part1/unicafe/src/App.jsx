import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({value, text}) => 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

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
  if (total < 1) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good'  value={good} />
        <StatisticLine text='neutral'  value={neutral} />
        <StatisticLine text='bad'  value={bad} />
        <StatisticLine text='all'  value={total} />
        <StatisticLine text='average'  value={average} />
        <StatisticLine text='positive'  value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1)/total
  const positivePercentage = `${good/total * 100}%`

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
      <h2>statistics</h2>
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