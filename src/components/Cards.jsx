import CourseCard from "./CourseCard";
const Cards = (props) => {
  let courseData = props.data;
  console.log(courseData);

  function getCourses() {
    let allCourses = [];
    Object.values(courseData).forEach((array) => {
      array.forEach((data) => {
        allCourses.push(data);
      });
    });
    return allCourses;
  }
  console.log(getCourses());
  return (
    <div>
      {getCourses().map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Cards;
