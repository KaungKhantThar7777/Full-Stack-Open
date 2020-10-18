import React from "react";
import ReactDOM from "react-dom";

function Header({ course }) {
  return <h1>{course}</h1>;
}
function Content({ parts }) {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </>
  );
}
function Total({ parts }) {
  return (
    <p>
      Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}
    </p>
  );
}
function Part({ part: { name, exercises } }) {
  return (
    <p>
      {name} {exercises}
    </p>
  );
}
const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
