import { Helmet } from "react-helmet-async";
import { FaArrowUp, FaKey, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseInstructorClass from "../../../hooks/UseInstructorClass";


const InstructorClasses = () => {
    const [myClass, refetch] = UseInstructorClass();

  const total = myClass.reduce((sum, item) => item.price + sum, 0);


  return (
    <div className="w-11/12 mb-12">
      <Helmet>
        <title>Sports Club | My classes </title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold mt-12 mb-5">
        My Classes
      </h1>
      <h3 className="text-2xl text-center mb-5">Total Classes: {myClass.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="my-color1">
              <th>#</th>
              <th>Image</th>
              <th>Class name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
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
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td>{item.totalEnrolledStudents}</td>
                <td>{item.feedback}</td>
                <td>
                  <button className="btn my-btn">
                    <FaArrowUp></FaArrowUp> Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;
