
import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Job from './Job';

const AvailableJob = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(() => {
        fetch("job.json")
        .then(response => response.json())
        .then(jobs => setJobs(jobs));
      },[])
    // const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <div className='grid lg:grid-cols-4 gap-4 rounded-lg'>
            {
               jobs.map(job => <Job key={job.id} job = {job}></Job>)
            }
        </div>
    );
};

export default AvailableJob;