import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobFeatureCart from "./JobFeatureCart";

const JobFeature = () => {
  const jobFeature = useLoaderData();
  const [navi, setNavi] = useState(4);
  console.log(jobFeature.slice(0, navi));
  return (
    <>
      <div className="grid lg:grid-cols-2 mt-8 w-full gap-4 rounded-lg">
        {jobFeature.slice(0, navi).map((job) => (
          <JobFeatureCart key={job.id} job={job}></JobFeatureCart>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-info " onClick={() => setNavi(6)}>See More</button></div>
    </>
  );
};

export default JobFeature;
