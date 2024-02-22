import chef from "../assets/chef.png";
const Chef = () => {
  return (
    <div className="pt-8 m-2">
      <div>
        <h2 className="font-semibold text-4xl text-center">
          Become a Professional Chef
        </h2>
        <p className=" text-sm  pt-2 text-center text-[#666666]">
          Never waste food again: Use what you have, cook something great!
        </p>
      </div>
      <div className="pt-3">
        <div className=" bg-blue-500">
          <div>
            <p className="font-sans font-semibold text-6xl">
              Healthy Cooking recipes
            </p>
            <p className=" text-sm  pt-8 text-[#666666]">
              Never waste food again: Use what you have, cook something great!
            </p>
          </div>
          <div className="pt-10">
            <button className="px-8 py-4 bg-black text-white rounded-3xl ">
              Explore recipes
            </button>
            <div className="w-[45%] ">
              <img src={chef} className="w-full " />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Chef;
