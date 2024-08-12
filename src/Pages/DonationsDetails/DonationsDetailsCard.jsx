import PropTypes from "prop-types";
import Swal from "sweetalert2";

const DonationsDetailsCard = ({ donation }) => {
  const { id, image, text_color } = donation;
  const donationItems = [];
  const handleDonationAddLocalStorage = () => {
    const donations = JSON.parse(localStorage.getItem("donations"));
    if (!donations) {
      donationItems.push(donation);
      localStorage.setItem("donations", JSON.stringify(donationItems));
      Swal.fire({
        title: "Good job!",
        text: "You donation added succesfully!",
        icon: "success",
      });
    } else {
      const isExist = donations.find(item => item.id === id);
      if (!isExist) {
        donationItems.push(...donations, donation);
        localStorage.setItem("donations", JSON.stringify(donationItems));
        Swal.fire({
          title: "Good job!",
          text: "You donation added succesfully!",
          icon: "success",
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went this donation already exists",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    }
  };
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-cente relative"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className="h-[50px] "
        style={{ backgroundColor: "rgba(11, 11, 11, 0.50)" }}
      >
        <button
          onClick={handleDonationAddLocalStorage}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-white p-6"
          type="button"
          style={{ backgroundColor: text_color }}
        >
          Donate $290
        </button>
      </div>
    </div>
  );
};
DonationsDetailsCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationsDetailsCard;
