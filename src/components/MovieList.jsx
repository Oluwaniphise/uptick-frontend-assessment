import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "./base_url";
import { IsLoading } from "./IsLoading";

const API_KEY = "7da402ce4c68f27f0ae54fe86e581ba7";
const API_IMG = "https://image.tmdb.org/t/p/w500";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [movieLoading, setMovieLoading] = useState(false);

  const fetchMovies = async () => {
    setMovieLoading(true);
    try {
      await axios.get(`${API_URL}?api_key=${API_KEY}`).then((res) => {
        setMovieLoading(false);

        setMovies(res.data.results);
      });
    } catch (err) {
      console.log(err);
      setMovieLoading(false);
    }
  };
  console.log(movies);
  useEffect(() => {
    fetchMovies();
  }, []);

  const showTitleFunction = (id) => {};

  return (
    <section className="container mx-auto">
      {movieLoading ? <IsLoading /> : (
      <div className="grid grid-cols-2 md:grid-cols-4">
        {movies &&
          movies.map((movie, index) => {
            return (
              <div key={movie.id}
                onClick={() => showTitleFunction(movie.id)}
                className="relative cursor-pointer max-w-[300px] mb-[1rem] mx-[0.5rem] md:mx-[2rem]"
              >
                <img
                  src={API_IMG + movie.poster_path}
                  className="rounded-xl w-[300px] h-[300px]"
                  alt=""
                />

                {movie.id == index && showTitle && (
                  <div className="absolute top-0 bottom-0 left-0 right-0 h-[300px] bg-[rgba(0,0,0,0.5)]">
                    <div className="flex flex-col justify-center  items-center">
                      <p className="px-[0.5rem]">{movie.original_title}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      )}
    </section>
  );
};
