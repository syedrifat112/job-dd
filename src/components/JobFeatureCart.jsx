import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const JobFeatureCart = ({ job }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl mb-8">
        <div className="flex justify-start p-4">
          <figure className="mt-8 ">
            <img src={job.company_logo} alt="img" />
          </figure>
        </div>
        <div className="card-body ">
          <p className="mt-5 text-xl font-medium mb-2">{job.job_title}</p>
          <p className="text-lg">{job.company_name}</p>
          <div>
            <button className="border border-blue-500 px-4 py-2 hover:text-white hover:bg-blue-500  text-blue-500 rounded me-4">
              {job.remote_or_onsite}
            </button>
            <button className="border border-blue-500 px-4 py-2 hover:text-white hover:bg-blue-500  text-blue-500 rounded me-4">
              {job.fulltime_or_parttime}
            </button>
          </div>
          <div className="lg:flex gap-8 ">
            <div className="flex flex-initial w-30 gap-2">
              <MapIcon className="h-5 w-5" />
              <p>{job.location}</p>
            </div>
            <div className="flex gap-2 flex-initial w-80">
              <CurrencyDollarIcon className="h-6 w-6" />
              <p>Salary:{job.salary}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/jobdetails/${job?.id - 1}`} className="btn btn-info">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFeatureCart;
