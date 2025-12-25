const Header = ({course}) => {
  console.log(course);

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
}

const Content = (parts) => {
  console.log(parts);
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]}/>
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App