import { FcLike } from "react-icons/fc";
const Card = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.image.url} alt="" />
        <div>
          <button>
            <FcLike fontSize="1.75rem"></FcLike>
          </button>
        </div>
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
