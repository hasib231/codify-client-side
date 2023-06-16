import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleInstructor from "../Instructors/SingleInstructor";


const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allInstructors = [], refetch } = useQuery(
    ["allInstructors"],
    async () => {
      const res = await axiosSecure.get("/allInstructors");
      console.log(allInstructors);
      return res.data;
    }
  );
  return (
    <div className="w-10/12 mx-auto mb-24">
      <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
        Popular Instructors
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {allInstructors.map((item) => (
          <SingleInstructor key={item._id} item={item}></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
