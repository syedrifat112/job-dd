import React from 'react';

const Job = ({job}) => {
    // console.log(job);
    return (
        <div className="card  bg-cyan-50 shadow-xl">
        <div className='flex justify-start px-8 pt-8'>
        <figure ><img src={job.image} alt="img" /></figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{job.title}</h2>
          <p className='text-slate-500'>{job.jobs}</p>
        </div>
      </div>
    );
};

export default Job;