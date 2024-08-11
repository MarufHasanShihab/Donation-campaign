import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationCard from "../../Components/DonationCard/DonationCard";

const Home = () => {
    const donations = useLoaderData()
    console.log(donations)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;