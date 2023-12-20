const App = () => {
  const course = 'Half Stack application development'

  const partsAndExercise = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content partsAndExercise={partsAndExercise}></Content>
      <Total partsAndExercise={partsAndExercise}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>

      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.partsAndExercise[0].name} exercises={props.partsAndExercise[0].exercises}></Part>
      <Part name={props.partsAndExercise[1].name} exercises={props.partsAndExercise[1].exercises}></Part>
      <Part name={props.partsAndExercise[2].name} exercises={props.partsAndExercise[2].exercises}></Part>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  const total = props.partsAndExercise[0].exercises + props.partsAndExercise[1].exercises + props.partsAndExercise[2].exercises;
  return (
    <div>
      <p>{total}</p>
    </div>
  )
}
export default App