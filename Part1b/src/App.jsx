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
  // const part1 = {
  //   name: 'Fundementals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // const part1 = 'Fundementals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  // const parts = [{part1}, {part2}, {part3}]

  const parts = [{
    name: 'Fundementals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
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
  <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}/>
  <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}/>
  <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}/>
  </>
  )
}


const Total = (props) => {
  return (
    <>
    <p>
    Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
    </p>
    </>
  )
}

export default App
