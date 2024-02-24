import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <div className="pt-8 mt-6 ">
      <div
        className={`w-full p-2  px-[5%] h-full flex items-center justify-center `}
      >
        <div
          className={`flex  bg-[${props.bgColor}] h-[110%] w-[85%] justify-between rounded-[3rem] relative`}
        >
          <div
            className={` text-black py-5 flex items-center justify-center pl-[${props.padding}]`}
          >
            <div className=" ">
              <p className="font-sans font-semibold text-6xl w-3/4">
                {props.title}
              </p>
              <p className=" text-sm  pt-8 text-[#666666] w-3/4">
                {props.description}
              </p>
              <div className="pt-10">
                <button className="px-8 py-4 bg-black text-white rounded-3xl ">
                  {props.buttonText}
                </button>
              </div>
            </div>
            <div className="absolute  top-0 left-[50%] m-auto">
              <img src={props.Badge} className="" />
            </div>
          </div>

          <div className="w-[45%] ">
            <img src={props.image} alt={props.alt} className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  Badge: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
export default Card;
