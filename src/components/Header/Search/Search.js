import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Notiflix from "notiflix";

import { useDispatch } from "react-redux";
import styles from "../Header.module.scss";
import { searchItemsCreator } from "../../../store/actionCreators/searchItemsCreator";

function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const searchPhrases = {
    query: text.toLowerCase(),
  };

  const handleInput = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (text.trim()) {
      dispatch(searchItemsCreator(searchPhrases));
    } else {
      Notiflix.Notify.failure("Enter your request, please!", {showOnlyTheLastOne: true});
    }
    setText("");
  };

  return (
    <div>
      <form className={styles.formSearch}>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="Enter the dish"
          value={text}
          onChange={handleInput}
          onKeyPress={(e) => e.key === "Enter" && searchHandler(e)}
        />
        <FiSearch onClick={searchHandler} />
      </form>
    </div>
  );
}

export default React.memo(Search);
