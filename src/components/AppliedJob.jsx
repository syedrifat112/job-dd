import React, { useContext, useState } from "react";
import { localAPI } from "../Context/LocalContext";
import Banner from "./Banner";
import AppliedCart from "./AppliedCart";
import Bannar from "./Bannar";

const AppliedJob = () => {
  const { appliedData } = useContext(localAPI);
  console.log(appliedData);
  const [select, setSelect] = useState("default");
  const newData = appliedData.filter(data => data.remote_or_onsite == select);
  console.log(newData, select);
  return (
    <>
        <div>
            <Bannar></Bannar>
        </div>
      <div className="flex justify-end items-center my-5">
        <select value={select} onChange={e => setSelect(e.target.value)} className="select select-bordered select-sm w-full max-w-xs">
          <option value="Default" selected>
            Filter By
          </option>
          <option value="Remote">Remote</option>
          <option value="Onsite">On-site</option>
        </select>
      </div>
      <div>
        {newData.length == 0 ?  appliedData.map((data) => (
            <AppliedCart key={data.id} data={data}></AppliedCart>
          )) : newData.map((data) => (
          <AppliedCart key={data.id} data={data}></AppliedCart>
        )) }
      </div>
    </>
  );
};

export default AppliedJob;
