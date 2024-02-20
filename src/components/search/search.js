import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import searchIcon from "../assets/magnifying-glass-solid.svg";

const Search = ({ onSearchTrip }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onSearchTrip(search);
  }, [search, onSearchTrip]);

  const handleSearchClick = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.container}>
      <button>
        <img src={searchIcon} alt="search_icon" className={style.icon} />
      </button>
      <input
        className={style.search}
        placeholder="Search your trip..."
        onChange={handleSearchClick}
        value={search}
      />
    </div>
  );
};

export default Search;
