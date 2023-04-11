import { createContext, useEffect, useState } from "react";

export const localAPI = createContext();
const LocalContext = ({children}) => {
    const [applyId, setApplyId] = useState([]);
    const [appliedData, setAppliedData] = useState([]);
// use local storage to manage cart data
const addToDb = (data, id) => {
    let applyingId = [];
    let applyingData = [];
    // add quantity
    const appliedId = localStorage.getItem("appliedId");
    const appliedData = localStorage.getItem('fullData');
    if(appliedData){
        applyingData= JSON.parse(appliedData);
    }
    if(appliedId){
        applyingId = JSON.parse(appliedId);
    }
    const alreadyAppliedId = applyingId.includes(id);
    if(!alreadyAppliedId){
        applyingId.push(id);
        applyingData.push(data);
        setApplyId(applyingId);
    }
    localStorage.setItem("fullData", JSON.stringify(applyingData));
    localStorage.setItem('appliedId', JSON.stringify(applyingId));
}
    useEffect(() => {
        const getAppliedData = localStorage.getItem("fullData");
        if(getAppliedData){
            setAppliedData(JSON.parse(getAppliedData));
        }
    }, [applyId])
    

    const data = { addToDb, appliedData};
    return (
        <localAPI.Provider value={data}>
            {children}
        </localAPI.Provider>
    )
};

export default LocalContext;