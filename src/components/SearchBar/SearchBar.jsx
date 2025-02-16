import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

import s from "./SearchBar.module.css";

export const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter a search query!");
      return;
    }
    onSearchChanged(value);
    console.log(value);
  };

  return (
    <header className={s.imgHeader}>
      <form onSubmit={handleSubmit}>
        <div className={s.wrapper}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Search"
            className={s.input}
          />
          <button className={s.btn} type="submit">
            <FaSearch className={s.icon} />
          </button>
        </div>
      </form>
    </header>
  );
};
