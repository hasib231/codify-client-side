import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SingleClass from "../../components/SingleClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Singelnstructor from "./Singelnstructor";

const AllInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allInstructors = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/allInstructors");
    console.log(allInstructors);
    return res.data;
  });
  return (
    <div className="w-10/12 mx-auto mb-24">
      <Helmet>
        <title>Sports Club | Instructor</title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
        All Instructor Classes
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {allInstructors.map((item) => (
          <Singelnstructor key={item._id} item={item}></Singelnstructor>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
