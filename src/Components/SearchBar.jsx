import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./Foodcard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => {
        setData(response.data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);
  

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div>
        {data.map((item, index) => (
          <FoodCard key={index} item={item} size="20" />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
