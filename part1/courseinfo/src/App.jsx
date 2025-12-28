const Header = ({courseName}) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
}

const Part = ({part}) => {
  const {name : partName, exercises : partExercises} = part;

  return (
    <div>
      <p>
        {partName} {partExercises}
      </p>
    </div>
  );
}

const Content = ({courseParts}) => {
  const [partOne, partTwo, partThree] = courseParts;
  
  return (
    <div>
      <Part part={partOne} />
      <Part part={partTwo} />
      <Part part={partThree} />
    </div>
  );
}

const Total = ({courseParts}) => {
  const courseExercises = courseParts.map(value => value.exercises);
  const sum = courseExercises.reduce(
    (totalExercises, currPartExercises) => totalExercises + currPartExercises, 0
  );

  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header 
        courseName={course.name}
      />
      <Content
        courseParts={course.parts}
      />
      <Total
        courseParts={course.parts}
      />
    </div>
  )
}

export default App