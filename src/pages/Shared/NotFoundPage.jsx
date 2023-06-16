import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-8/12 items-center justify-center mx-auto">
      <img
        className=""
        src="https://miro.medium.com/v2/resize:fit:1400/1*viqIrYzAw_SbAb8TqShNIA.png"
        alt=""
      />
      <Link to="/">
        <button className="btn bg-teal-400 text-white">Go to Home Page</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
