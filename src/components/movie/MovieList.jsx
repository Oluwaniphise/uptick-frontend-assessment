import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../base_url";
import { IsLoading } from "../IsLoading";
import { FaPlusCircle } from "react-icons/fa";
import { MovieDetailModal } from "./MovieDetailModal";
import { SearchBar } from "./SearchBar";
import { FaSearch } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { FilterGenre } from "./FilterGenre";
import { FilterDate } from "./FilterDate";

const API_IMG = "https://image.tmdb.org/t/p/w500";

export const MovieList = () => {
  //states
  const [movies, setMovies] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [hover, setHover] = useState(null);
  const [movieLoading, setMovieLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [search, setSearch] = useState("");

  // function that calls the TMDB API
  const fetchMovies = async () => {
    setMovieLoading(true);
    try {
      await axios
        .get(`${API_URL}discover/movie?api_key=${API_KEY}`)
        .then((res) => {
          setMovieLoading(false);
          setMovies(res.data.results);
        });
    } catch (err) {
      console.log(err);
      setMovieLoading(false);
    }
  };

  // useEffect loads the function when page renders
  useEffect(() => {
    fetchMovies();
  }, []);

  // handles the over event so one movie title and detail is shown at a time
  const handleHover = (id) => {
    if (hover === id) {
      return setHover(null);
    }
    setHover(id);
    setShowTitle(true);
  };

  // handles selected movie
  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };
  console.log(movies);
  return (
    <section className="py-[4rem] container mx-auto ">
      <ToastContainer />
      <div className="flex flex-col md:flex-row justify-between">
        <form className="bg-white flex flex-row px-[3%] justify-between items-center  mb-[1.5rem] max-w-[350px] rounded-[30px]">
          <input
            value={search}
            className="outline-none text-black py-[0.5rem] px-[0.5rem] rounded-[30px]"
            placeholder="Search by movie name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-[#424242]" />
        </form>
        <div className="flex flex-row gap-[2rem]">
          <FilterGenre setMovies={setMovies} />

          <FilterDate  setMovies={setMovies} />
        </div>
      </div>

      {showMovieModal && (
        <MovieDetailModal
          item={selectedMovie}
          setShowMovieModal={setShowMovieModal}
        />
      )}
      {movieLoading ? (
        <IsLoading />
      ) : (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
          }).length > 0
            ? movies
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.original_title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                })
                .map((movie) => {
                  return (
                    <div
                      key={movie.id}
                      onPointerEnter={() => handleHover(movie.id)}
                      onClick={() => handleSelectedMovie(movie)}
                      className="relative cursor-pointer max-w-[300px] mb-[2rem] mx-[1rem]  "
                    >
                      <img
                        src={API_IMG + movie.poster_path}
                        className="rounded-xl  w-full h-full"
                        alt=""
                      />

                      {hover === movie.id ? (
                        <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 h-full bg-[rgba(0,0,0,0.5)]">
                          <div className="scale-75 hover:scale-100 ease-in duration-500">
                            <h3 className="font-bold px-[0.5rem]">
                              {movie.original_title}
                            </h3>
                            <p className="mt-[0.5rem] flex items-center justify-center">
                              <FaPlusCircle />
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })
            : "No movies available"}
        </div>
      )}
    </section>
  );
};
