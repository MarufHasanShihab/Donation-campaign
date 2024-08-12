/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { useState } from "react";
import DonationsCards from "./DonationsCards";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [seelAll, setSeAll] = useState(false);
  useEffect(() => {
    const getDonations = JSON.parse(localStorage.getItem("donations"));
    setDonations(getDonations);
  }, []);
  console.log(donations);
  return (
      <div>
        <div>
          {donations ? 
              <div  className="my-8 grid lg:grid-cols-2 gap-6">
                {
                    seelAll ? donations.map(donation => <DonationsCards key={donation.id} donation={donation}></DonationsCards>) :
                    donations.slice(0,4).map(donation => <DonationsCards key={donation.id} donation={donation}></DonationsCards>) 
                }
              </div>
           : 
           <div className="h-[70vh] flex justify-center items-center font-bold text-3xl">
             No Item
           </div>
          }
        </div>
        
      <div className="my-10 flex justify-center">
        {
            donations?.length > 4 && <button
            onClick={()=>setSeAll(!seelAll)}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-white bg-[#009444] "
              type="button"
            >
              {seelAll ? "See Less": "See All"}
            </button>
        }
      </div>
      </div>
  );
};

export default Donations;
