// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name} {props.question}</p>
//     </div>
//   )

// }

// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1> 
//       <Hello name="you" question="?"/>
//       <Hello question="?"/>
//     </div>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundementals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [{part1}, {part2}, {part3}]

  return (
    <div>
      <Header course={course}/>
      <Content part = {part1} exercise = {exercises1}/>
      <Content part = {part2} exercise = {exercises2}/>
      <Content part = {part3} exercise = {exercises3}/>
      <Total number = {exercises1+exercises2+exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
  <>
  <p>
    {props.part} {props.exercise}
  </p>
  </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>
    Number of exercises {props.number}
    </p>
    </>
  )
}

export default App
