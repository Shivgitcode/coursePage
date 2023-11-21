import { FcLike } from "react-icons/fc";
const CourseCard = (props) => {
  let course = props.course;

  return (
    <div>
      <div>
        <img src={course.image.url} alt="" />
        <div>
          <button>
            <FcLike fontSize="1.75rem"></FcLike>
          </button>
        </div>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
