const Header = ({course}) => {
  console.log(course);

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Part = ({part}) => {

  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
}

const Content = ({parts}) => {
  console.log(parts);
  
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  );
}

const Total = ({parts}) => {
  console.log(parts);
  const sum = parts.reduce((totalExercises, currPart) => totalExercises + currPart.exercises, 0);

  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header 
        course={course}
      />
      <Content
        parts={parts}
      />
      <Total 
        parts={parts}
      />
    </div>
  )
}

export default App