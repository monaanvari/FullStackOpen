import { useState } from 'react'

const Header = (props) => {
  return <>
  <h1>{props.text} </h1>
  </>
}

const Stats = (props) => {
  return <>
   <p> {props.text} {props.stat}</p>
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

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" onClick={handleGoodReview}/>
      <Button text="neutral" onClick={handleNeutralReview}/>
      <Button text="bad" onClick={handleBadReview}/>
      <Header text="statistics"/>
      <Stats text = "good" stat = {good}/>
      <Stats text = "neutral" stat = {neutral}/>
      <Stats text = "bad" stat = {bad}/>
      <Stats text = "all" stat = {good + bad + neutral}/>
      <Stats text = "average" stat = {(good - bad)/3}/>
      <Stats text = "positive" stat = {good / (good + bad + neutral)}/>
    </div>
  )
}

export default App