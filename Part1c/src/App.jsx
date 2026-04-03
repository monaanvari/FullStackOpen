import { useState } from 'react'

const Header = (props) => {
  return <>
  <h1>{props.text} </h1>
  </>
}

const Button = (props) => {
  return <>
    <button onClick = {props.onClick}>
      {props.text}
    </button>
  </>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodReview = () => {
    console.log('a good review')
    setGood(good + 1)
  }

  const handleNeutralReview = () => {
    console.log('a neutral review')
    setNeutral(neutral + 1)

  }

  const handleBadReview = () => {
    console.log('a bad review' )
    setBad(bad + 1)
  }

  const StatisticsLine = (props) => {
  return <>
   <p> {props.text} {props.value}</p>
  </>
  }

  const StatRow = (props) => {
    return <>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    </>
  }

  const Base = () => {
    return <>
    <Header text="give feedback"/>
    <Button text="good" onClick={handleGoodReview}/>
    <Button text="neutral" onClick={handleNeutralReview}/>
    <Button text="bad" onClick={handleBadReview}/>
    <Header text="statistics"/>
    </>
  }
  if (good != 0 || bad != 0 || neutral != 0) {
    return <>
    <Base/>
    <table>
    <StatRow text = "good" value = {good}/>
    <StatRow text = "neutral" value = {neutral}/>
    <StatRow text = "bad" value = {bad}/>
    <StatRow text = "all" value = {good + bad + neutral}/>
    <StatRow text = "average" value = {(good - bad)/3}/>
    <StatRow text = "positive" value = {good / (good + bad + neutral)}/>
    </table>
    </>
  }
  return <>
  <Base/>
  <p>No feedback given</p>
  </>
}

export default App