



const Singelnstructor = ({ item }) => {
  const {  image,  name,email} = item;

  return (
    <div className={"card w-96 shadow-xl"}>
      <figure>
        <img className="h-64" src={image} alt="Shoes" />
      </figure>

      <div className="card-body flex flex-col items-center">
        <p className="font-semibold"> {name}</p>
        <p className="font-semibold"> {email}</p>
      </div>
    </div>
  );
};

export default Singelnstructor;
