import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleClass from "../../components/SingleClass";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class/allApprove");
    console.log(classes);
    return res.data;
  });
  return (
    <div className="w-10/12 mx-auto mb-24">
      <Helmet>
        <title>Sports Club | Classes</title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
        All Classes
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {classes.map((item) => (
          <SingleClass key={item._id} item={item}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
