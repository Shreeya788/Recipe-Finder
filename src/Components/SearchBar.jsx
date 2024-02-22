import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearchInputChange }) => {
  const [searchInput, setSearchInput] = useState();
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    handleSearchInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchInputChange(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" mt-4 pt-4 flex justify-center items-center"
    >
      <input
        type="text"
        name="search"
        className="w-[80%] p-4 border border-gray-300 rounded-md"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search here...."
      />
    </form>
  );
};

SearchBar.propTypes = {
  handleSearchInputChange: PropTypes.func.isRequired,
};
export default SearchBar;
