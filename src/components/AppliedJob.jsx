import React, { useContext } from 'react';
import { localAPI } from '../Context/LocalContext';
import Banner from './Banner';
import AppliedCart from './AppliedCart';

const AppliedJob = () => {
    const {appliedData} = useContext(localAPI);
    console.log(appliedData);
    return (
        <div>
            {
                appliedData.map(data => <AppliedCart key={data.id} data = {data}></AppliedCart>)
            }
        </div>
    );
};

export default AppliedJob;