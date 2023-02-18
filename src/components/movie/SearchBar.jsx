import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export const SearchBar = ({ movies, setMovies }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);

    const newMovies = movies.filter((movie) => {
      return search.toLowerCase() === ""
        ? movie
        : movie.original_title.toLowerCase().includes(search);
    });
    setMovies(newMovies);
  };

  return (
    <section>
      <form className="bg-white flex flex-row px-[3%] justify-between items-center  mb-[1.5rem] max-w-[350px] rounded-[30px]">
        <input
          value={search}
          className="outline-none text-black py-[0.5rem] px-[0.5rem] rounded-[30px]"
          placeholder="Search by movie name"
          onChange={(e) => handleSearch(e)}
        />
        <FaSearch className="text-[#424242]" />
      </form>
    </section>
  );
};
