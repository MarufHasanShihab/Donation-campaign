import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const DonationsCards = ({ donation }) => {
  const { id, image, title, bg_color, text_color, button_text } = donation;
  return (
    <div key={id}>
      <div
        className="relative flex bg-clip-border rounded-xl  text-gray-700 shadow-md w-full max-w-[48rem] flex-row"
        style={{ backgroundColor: bg_color }}
      >
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700  rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={image}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            style={{ color: text_color }}
          >
            {button_text}
          </button>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p
            className="block mb-8 font-sans text-base antialiased font-bold leading-relaxed"
            style={{ color: text_color }}
          >
            $290.00
          </p>
          <Link to={`/donationsDetails/${id}`}>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md  hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-white "
              type="button"
              style={{ backgroundColor: text_color }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationsCards.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonationsCards;
