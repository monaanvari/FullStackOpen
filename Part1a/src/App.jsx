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
      <Content part1 = {part1} exercises1 = {exercises1} part2 = {part2} exercises2={exercises2} part3 = {part3} exercises3 = {exercises3}/>
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

const Part = (props) => {
  return (
    <>
    <p>
      {props.part} {props.exercise}
    </p>
    </>
  )

}

const Content = (props) => {
  return (
  <>
  <Part part = {props.part1} exercise = {props.exercises1}/>
  <Part part = {props.part2} exercise = {props.exercises2}/>
  <Part part = {props.part3} exercise = {props.exercises3}/>
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
