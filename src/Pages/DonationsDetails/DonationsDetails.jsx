import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationsDetailsCard from "./DonationsDetailsCard";

const DonationsDetails = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const donations = useLoaderData();
  console.log(id);
  console.log(donations);
  useEffect(() => {
    const findDonation = donations.find((item) => item.id === id);
    setDonation(findDonation);
  }, [id, donations]);

  return (
    <div>
      <DonationsDetailsCard donation={donation}></DonationsDetailsCard>
    </div>
  );
};

export default DonationsDetails;
