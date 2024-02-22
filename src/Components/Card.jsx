import food from "../assets/food.png";
import Badge from "../assets/Badge.png";
const Card = () => {
  return (
    <div className="pt-8 ">
      <div className="w-full p-2  px-[5%] h-full flex items-center justify-center ">
        <div className="flex  bg-[#E7FAFE] h-[110%] w-[85%] justify-between rounded-[3rem] relative">
          <div className="  text-black py-5 flex items-center justify-center pl-[5%]">
            <div className=" ">
              <p className="font-sans font-semibold text-6xl">
                Healthy Cooking recipes
              </p>
              <p className=" text-sm  pt-8 text-[#666666]">
                Never waste food again: Use what you have, cook something great!
              </p>
              <div className="pt-10">
                <button className="px-8 py-4 bg-black text-white rounded-3xl ">
                  Explore recipes
                </button>
              </div>
            </div>
            <div className="absolute  top-0 left-[50%] m-auto">
              <img src={Badge} className="" />
            </div>
          </div>

          <div className="w-[45%] ">
            <img src={food} className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
