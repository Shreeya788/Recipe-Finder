import FoodCard from "./Foodcard";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Detail = () => {
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);
  const [itemDetail, setItemDetail] = useState("");
  const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data.meals);
        console.log(response.data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput, baseURL]);

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  const handleItemClick = (item) => {
    console.log(item);
    setItemDetail(item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setItemDetail("");
  };

  return (
    <div>
      {!show ? (
        <>
          <SearchBar handleSearchInputChange={handleSearchInputChange} />
          <div className="grid grid-cols-4 gap-x-1 gap-y-1 px-[5%] pt-10 ">
            {data ? (
              data.map((item, index) => (
                <FoodCard
                  onClick={() => handleItemClick(item)}
                  key={index}
                  item={item}
                  size="10"
                />
              ))
            ) : (
              <div className="h-screen w-screen flex justify-center items-center text-black ">
                loading.....
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="grid grid-cols-2">
              <div>
                <img
                  src={itemDetail.strMealThumb}
                  height={300}
                  width={600}
                  className="px-[10%] pt-[5%] rounded-3xl pb-2"
                />
                <div className="px-[10%] text-3xl text-slate-700" >
                {itemDetail.strMeal}
                </div>
                
              </div>
              <div className=" pt-[5%]">
                <p className=" text-7xl font-semibold pb-3">Ingredients</p>
                <ul className="flex flex-col gap-y-2 list-disc">
                  {itemDetail.strIngredient1.length > 0 && (
                    <li>{itemDetail.strIngredient1}</li>
                  )}
                  {itemDetail.strIngredient2.length > 0 && (
                    <li>{itemDetail.strIngredient2}</li>
                  )}
                  {itemDetail.strIngredient3.length > 0 && (
                    <li>{itemDetail.strIngredient3}</li>
                  )}
                  {itemDetail.strIngredient4.length > 0 && (
                    <li>{itemDetail.strIngredient4}</li>
                  )}
                  {itemDetail.strIngredient5.length > 0 && (
                    <li>{itemDetail.strIngredient5}</li>
                  )}
                  {itemDetail.strIngredient6.length > 0 && (
                    <li>{itemDetail.strIngredient6}</li>
                  )}
                  {itemDetail.strIngredient7.length > 0 && (
                    <li>{itemDetail.strIngredient7}</li>
                  )}
                  {itemDetail.strIngredient8.length > 0 && (
                    <li>{itemDetail.strIngredient8}</li>
                  )}
                  {itemDetail.strIngredient9.length > 0 && (
                    <li>{itemDetail.strIngredient9}</li>
                  )}
                  {itemDetail.strIngredient10.length > 0 && (
                    <li>{itemDetail.strIngredient10}</li>
                  )}
                  {itemDetail.strIngredient11.length > 0 && (
                    <li>{itemDetail.strIngredient11}</li>
                  )}
                  {itemDetail.strIngredient12.length > 0 && (
                    <li>{itemDetail.strIngredient12}</li>
                  )}
                  {itemDetail.strIngredient13.length > 0 && (
                    <li>{itemDetail.strIngredient13}</li>
                  )}
                  {itemDetail.strIngredient14.length > 0 && (
                    <li>{itemDetail.strIngredient14}</li>
                  )}
                  {itemDetail.strIngredient15.length > 0 && (
                    <li>{itemDetail.strIngredient15}</li>
                  )}
                  {itemDetail.strIngredient16.length > 0 && (
                    <li>{itemDetail.strIngredient16}</li>
                  )}
                  {itemDetail.strIngredient17.length > 0 && (
                    <li>{itemDetail.strIngredient17}</li>
                  )}
                  {itemDetail.strIngredient18.length > 0 && (
                    <li>{itemDetail.strIngredient18}</li>
                  )}
                  {itemDetail.strIngredient19.length > 0 && (
                    <li>{itemDetail.strIngredient19}</li>
                  )}
                  {itemDetail.strIngredient20.length > 0 && (
                    <li>{itemDetail.strIngredient20}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="">
              <p className="px-[5%] pt-4 text-5xl font-semibold">
                Instructions
              </p>
              <div className="px-[5%] text-md pt-3">
                {itemDetail.strInstructions}
              </div>
            </div>
            <button
              className="border-2 border-black p-2 absolute left-[80%] top-[10%]"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
