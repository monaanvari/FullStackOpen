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
    <StatisticsLine text = "good" value = {good}/>
    <StatisticsLine text = "neutral" value = {neutral}/>
    <StatisticsLine text = "bad" value = {bad}/>
    <StatisticsLine text = "all" value = {good + bad + neutral}/>
    <StatisticsLine text = "average" value = {(good - bad)/3}/>
    <StatisticsLine text = "positive" value = {good / (good + bad + neutral)}/>
    </>
  }
  return <>
  <Base/>
  <p>No feedback given</p>
  </>
}

export default App