const Header = ({course}) => {
  console.log(course);

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Part = ({name, amount}) => {
  console.log(name, amount);

  return (
    <div>
      <p>
        {name} {amount}
      </p>
    </div>
  );
}

const Content = ({part1, part2, part3}) => {
  console.log(part1, part2, part3);
  
  return (
    <div>
      <Part 
        name={part1.name}
        amount={part1.amount}
      />
      <Part 
        name={part2.name}
        amount={part2.amount}
      />
      <Part 
        name={part3.name}
        amount={part3.amount}
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
        part1={{name: part1, amount: exercises1}}
        part2={{name: part2, amount: exercises2}}
        part3={{name: part3, amount: exercises3}}
      />
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App