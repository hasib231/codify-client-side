import { FaEnvelope } from "react-icons/fa";

const SingleInstructor = ({ item }) => {
  const { image, name, email } = item;

  return (
    <div className={"card w-96 shadow-xl"}>
      <figure>
        <img className="h-64" src={image} alt="Shoes" />
      </figure>

      <div className="card-body  items-center">
        <p className="font-semibold"> {name}</p>
        <FaEnvelope></FaEnvelope>
        <p className="font-semibold">{email}</p>
      </div>
    </div>
  );
};

export default SingleInstructor;
