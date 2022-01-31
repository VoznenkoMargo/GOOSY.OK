import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div>
      <form>
        <input type="text" placeholder="What would you like to eat?" />
        <FiSearch/>
        
      </form>
    </div>
  );
}

export default Search;
