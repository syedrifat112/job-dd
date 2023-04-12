import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { localAPI } from '../Context/LocalContext';

const JobDetails = () => {
    const data = useLoaderData();
    const {job_description,id, job_responsibility,educational_requirements,experiences,salary,job_title,contact_information,location} = data;
    const {addToDb} = useContext(localAPI);
    
    return (
        <div className="mx-40 flex items-center justify-between mt-20">


  <div className="text-left w-1/2">
        <p className="mb-4"><span className="font-medium">Job Description:</span> {job_description}</p>
        <p className="mb-4"><span className="font-medium">Job Responsibility:</span> {job_responsibility}</p>
        <p className="font-medium mb-1">Educational Requirements:</p>
        <p className="mb-4">{educational_requirements}</p>
        <p className="font-medium mb-1">Experiences:</p>
        <p>{experiences}</p>
  </div>

  {/* right side  */}

 <div className="text-left">
<p className="font-medium text-lg">Job Details:</p>
<hr className="hr-sharp w-full border-gray-400 mt-2 mb-5"></hr>

<div className="flex mb-2">
  <img src="https://i.ibb.co/Km69zbf/Frame.png" alt="" />
  <p><span className="font-medium ms-2">Salary :</span> {salary}</p>
</div>

<div className="flex mb-2">
  <img src="https://i.ibb.co/42L8Kv6/Frame-1.png" alt="" />
  <p><span className="font-medium ms-2">Job Title : </span> {job_title}</p>
</div>


<p className="font-medium text-lg mt-8">Contact Information:</p>
<hr className="hr-sharp w-full border-gray-400 mt-2 mb-5"></hr>

<div className="flex mb-2">
  <img src="https://i.ibb.co/pKrY6L3/Frame-2.png" alt="" />
  <p><span className="font-medium ms-2">Phone :</span>{contact_information.phone}</p>
</div>

<div className="flex mb-2">
  <img src="https://i.ibb.co/MG9PvDD/Frame-3.png" alt="" />
  <p><span className="font-medium ms-2">Email :</span>{contact_information.email}</p>
</div>

<div className="flex mb-2">
  <img src="https://i.ibb.co/3hcSPCn/Frame-4.png" alt="" />
  <p><span className="font-medium ms-2">Address : </span> {location}</p>
</div>

<button  onClick={() => {addToDb(data, id)}} className="bg-blue-500 text-white rounded-md w-full h-10 hover:bg-blue-600 mt-6">Apply Now</button>

  </div> 


</div>
    );
};

export default JobDetails;