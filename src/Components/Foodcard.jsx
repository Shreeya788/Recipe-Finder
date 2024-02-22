import PropTypes from "prop-types";

const FoodCard = ({ item, onClick }) => {
  return (
    <div className="w-full h-[38rem] flex justify-center items-center ">
      <div className="bg-[#E7FAFE] rounded-3xl w-[85%] ">
        <div>
          <img src={item.strMealThumb} className=" rounded-3xl p-3  w-full " />
        </div>

        <div className=" px-6 ">
          <p className="font-semibold text-2xl">{item.strMeal}</p>
          <p className=" line-clamp-2 text-justify  ">{item.strInstructions}</p>
          <div className="flex justify-center items-center py-4 ">
            <button onClick={onClick}  className=" bg-black text-white  py-2 rounded-md w-full">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
  }),
  onClick:PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};
export default FoodCard;
