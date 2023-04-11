import React from 'react';
import Banner from './Banner';
import AvailableJob from './AvailableJob';
import JobFeature from './JobFeature';
import Category from './Category';
import Featured from './Featured';

const Home = () => {
    return (
<div>
    <Banner></Banner>
    <Category></Category>
    <AvailableJob></AvailableJob>
    <Featured></Featured>
    <JobFeature></JobFeature>
</div>
    );
};

export default Home;