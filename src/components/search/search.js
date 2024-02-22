import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import searchIcon from "../assets/magnifying-glass-solid.svg";
import { useDispatch } from "react-redux";
import { setSelectedSearchTrip } from "../../reducers/tripSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedSearchTrip(search));

    // onSearchTrip(filteredTrips);
  }, [search, dispatch]);

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
