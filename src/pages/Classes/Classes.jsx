import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SingelClass from '../../components/SingelClass';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["class"], async () => {
      const res = await axiosSecure.get("/class");
      console.log(classes);
      return res.data;
    });
    return (
      <div className='w-10/12 mx-auto mb-24'>
        <Helmet>
          <title>Sports Club | Classes</title>
        </Helmet>
        <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
          All Instructor Classes
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          {classes.map((item) => (
            <SingelClass key={item._id} item={item}></SingelClass>
          ))}
        </div>
      </div>
    );
};

export default Classes;