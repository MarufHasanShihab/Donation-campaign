import { useEffect } from "react";
import { useState } from "react";


const Donations = () => {
    const  [donations, setDonations] = useState([])
    useEffect(()=>{
        const getDonations = JSON.parse(localStorage.getItem("donations"))
        setDonations(getDonations)
    },[])
    console.log(donations)
    return (
        <div>
            
        </div>
    );
};

export default Donations;