import FoodCard from "./Foodcard";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Detail = () => {
  const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-4 gap-x-1 gap-y-1 px-[5%] pt-10 ">
        {data.map((item, index) => (
          <FoodCard key={index} item={item} size="10" />
        ))}
      </div>
    </div>
  );
};

export default Detail;
