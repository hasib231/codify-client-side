import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleClass from "../../components/SingleClass";

const PopularClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class/popularClass");
    console.log(classes);
    return res.data;
  });
  return (
    <div className="w-10/12 mx-auto mb-24">
      <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
        Popular Classes
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {classes.map((item) => (
          <div className={"card w-96 shadow-xl"}>
            <figure>
              <img className="h-64" src={item.image} alt="Shoes" />
            </figure>

            <div className="card-body  items-center">
              <p className="font-semibold"> {item.className}</p>
              <p className="font-semibold">${item.price}</p>
              <p className="font-semibold">
                Available Seats: {item.availableSeats}
              </p>
              <p className="font-semibold">
                Enrolled Students: {item.totalEnrolledStudents}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
