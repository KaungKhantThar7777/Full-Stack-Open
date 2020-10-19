import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>Total of {sum} exercises</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part key={part.id || i} part={part} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
