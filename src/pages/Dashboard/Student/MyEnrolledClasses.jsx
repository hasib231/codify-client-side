import { Helmet } from "react-helmet-async";
import useEnrolledClass from "../../../hooks/useEnrolledClass";

const MySelectedClasses = () => {
    const [myClass, refetch] = useEnrolledClass();


  return (
    <div className="w-8/12 mb-12">
      <Helmet>
        <title>Sports Club | My Enrolled classes </title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold mt-12 mb-5">
        My Enrolled Classes
      </h1>
      <h3 className="text-3xl my-5 text-center">
        Total Enrolled class: {myClass.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="my-color1">
              <th>#</th>
              <th>Image</th>
              <th>Class name</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {myClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td className="">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
