import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, image, button_text, title, bg_color, text_color } = donation;
  return (
    <div>
      <div
        className={`relative flex flex-col mt-6 text-gray-700   shadow-md bg-clip-border rounded-xl w-72`} style={{backgroundColor: bg_color}}
      >
        <div className="relative mx-4-mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 ">
          <img src={image} alt="card-image" />
        </div>

        <div className="p-6 mt-2 pt-0">
          <Link to={`/donationsDetails/${id}`}><button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            style={{color: text_color}}
          >
            {button_text}
          </button></Link>
        </div>
        <div className="px-6 mb-8">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900" style={{color: text_color}}>
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
