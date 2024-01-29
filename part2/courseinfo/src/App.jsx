const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <Header name={course.name}></Header>
      {course.parts.map( course => 
        <Part key={course.id} name={course.name} exercise={course.exercises}> </Part>
      )}
      <p><b>total of {total} exercises</b></p>

    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  
  return (
    <p> {props.name} {props.exercise}</p>
  )
}

export default App