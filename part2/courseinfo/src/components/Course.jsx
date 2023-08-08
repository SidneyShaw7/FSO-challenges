const Course = ({ courses }) => {
  return (
    <>
      <Header courses={courses[0]} />
      <Content courses={courses[0]} />
      <Header courses={courses[1]} />
      <Content courses={courses[1]} />
    </>
  );
};

const Header = ({ courses }) => {
  return <h2>{courses.name}</h2>;
};

const Content = ({ courses }) => {
  return (
    <>
      <Part courses={courses} />
      <Total courses={courses} />
    </>
  );
};
const Part = ({ courses }) => {
  return (
    <>
      {courses.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Total = ({ courses }) => {
  return (
    <>
      <p style={{ fontWeight: "bold" }}>
        total of {courses.parts.reduce((a, cv) => a + cv.exercises, 0)}{" "}
        exersises
      </p>
    </>
  );
};

export default Course;
