const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
}

const Content = ({parts, exercises}) => {
  return (
    <div>
      <Part 
        part={parts[0]}
        exercises={exercises[0]}
      />
      <Part 
        part={parts[1]}
        exercises={exercises[1]}
      />
      <Part 
        part={parts[2]}
        exercises={exercises[2]}
      />
    </div>
  );
}

const Total = ({exercises}) => {
  let sum = 0;

  for (let i = 0; i < exercises.length; i++) {
    sum += exercises[i];
  }

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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App