import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { localAPI } from '../Context/LocalContext';

const JobDetails = () => {
    const data = useLoaderData();
    const {job_description,id, job_responsibility,educational_requirements,experiences,salary,job_title,contact_information,location} = data;
    const {addToDb} = useContext(localAPI);
    
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <p><span>Job Description :</span>{job_description}</p>
                <p><span>Job Responsibility :</span>{job_responsibility}</p>
                <h1>Educational Requirements :</h1>
                <p>{educational_requirements}</p>
                <h1>Experiences:</h1>
                    <p>{experiences}</p>
            </div>
            <div >
                <h3>Job Details</h3>
                <p>Salary : {salary}</p>
                <p>Job Title : {job_title}</p>
                <h3>Contact Information</h3>
                <p><span>Phone:</span>{contact_information.phone}</p>
                <p><span>Email:</span>{contact_information.email}</p>
                <p><span>Address:</span>{location}</p>
                <button onClick={() => {addToDb(data, id)}} className="btn btn-info px-16 py-3">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;