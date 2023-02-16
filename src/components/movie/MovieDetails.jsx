import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../base_url";
import { IsLoading } from "../IsLoading";

export const MovieDetails = ({ item }) => {
  const [movie, setMovie] = useState({});
  const [movieLoading, setMovieLoading] = useState(false);
  const getSingleMovie = async () => {
    try {
      await axios
        .get(`${API_URL}/movie/${item.id}?api_key=${API_KEY}`)
        .then((res) => {
          setMovieLoading(false);
          setMovie(res.data);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleMovie();
  }, []);

  return (
    <section>
      {movieLoading && movieLoading ? (
        <IsLoading />
      ) : (
        <>
          <h1 className="my-[0.5rem]">
            {" "}
            <span className="font-bold">Title: </span> {movie.title}{" "}
          </h1>
          <h1 className="my-[0.5rem]">
            <span className="font-bold ">Release Date: </span>{" "}
            {movie.release_date}{" "}
          </h1>
          <p className="my-[0.5rem]">
            <span className="font-bold">Overview: </span> {movie.overview}
          </p>
          <p className="my-[0.5rem]">
            <span className="font-bold">Genres: </span>{" "}
            {movie?.genres?.map((item) => {
              return <p>{item.name}</p>;
            })}
          </p>
        </>
      )}
    </section>
  );
};
