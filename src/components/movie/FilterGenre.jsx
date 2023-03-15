import React, { useState, useEffect } from "react";
import { useMovieStore } from "../app/movieStore";

export const FilterGenre = () => {
  const {genres, getGenres, getSelectedGenreMovies} = useMovieStore((state) => ({
    genres: state.genres,
    getGenres:state.getGenres,
    getSelectedGenreMovies: state.getSelectedGenreMovies,

  }))

  const [genreFilter, setGenreFilter] = useState(28);

  useEffect(() => {
    getGenres()
    getSelectedGenreMovies(genreFilter)
  }, [genreFilter]);

  
  return (
    <section className="max-w-[200px] ">
      <select onChange={(e) => setGenreFilter(e.target.value)} className="block w-full rounded-[30px] p-2 mb-6 text-sm text-black">
        <option value="nothing">Filter by genre</option>
        {genres.map((genre) => {
          return <option key={genre.id} value={genre.id}>{genre.name}</option>;
        })}
      </select>
    </section>
  );
};
