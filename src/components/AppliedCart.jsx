import React from 'react';
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedCart = ({data}) => {
    const {job_title,company_logo,remote_or_onsite,fulltime_or_parttime,location,salary,company_name,id} = data
    return (
        <div className=" grid grid-cols-6 card card-compact bg-base-100 shadow-xl my-16">
      <figure className="mt-8 col-span-2">
        <img  src={company_logo} alt="img" />
      </figure>
      <div className="card-body col-span-3">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
        <button className="border border-blue-500 px-4 py-2 hover:text-white hover:bg-blue-500  text-blue-500 rounded me-4">
                 {remote_or_onsite}
                </button>
                <button className="border border-blue-500 px-4 py-2 hover:text-white hover:bg-blue-500  text-blue-500 rounded me-4">
                  {fulltime_or_parttime}
                </button>
        </div>
        <div className="lg:flex gap-8 ">
          <div className="flex flex-initial w-30 gap-2">
            <MapIcon className="h-5 w-5" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 flex-initial w-80">
            <CurrencyDollarIcon className="h-6 w-6" />
            <p>Salary:{salary}</p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-start items-center col-span-1">
          <Link to={`/jobdetails/${id - 1}`}  className="btn btn-info">View Details</Link>
        </div>
    </div>
    );
};

export default AppliedCart;