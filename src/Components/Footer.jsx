import logo from "../assets/logo.png";
import facebook from "../svgs/facebook.svg";
import instagram from "../svgs/instagram.svg";
import Github from "../svgs/Github.svg";
const Footer = () => {
  return (
    <div className=" mt-5 pt-6 justify-end">
      <div className="text-black font-sans">
        <div className="w-[full] h-[full] px-[10%]">
          <img src={logo} alt="logo of foodieland" />
        </div>
        <div className="flex px-[10%] py-3 justify-between">
          <div>
            <p className="text-gray-800 text-lg">
              A Web app to find healthy recipes
            </p>
          </div>
          <div className="">
            <ul className="flex gap-x-14 text-lg font-semibold ">
              <li>Blog</li>
              <li>Recipes</li>
              <li>Contact</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <hr className="mx-[5%] mt-8" />
        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-700"> &copy; 2024 SHREEYA SHRESTHA</p>
        </div>
        <div className=" flex gap-x-8 justify-end px-[10%] py-2">
          <img src={facebook} />
          <img src={instagram} />
          <img src={Github} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
