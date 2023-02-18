import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../base_url";
import axios from "axios";

export const FilterGenre = ({setMovies}) => {
  const [genres, setGenres] = useState([]);
  const [genreFilter, setGenreFilter] = useState(28);

  const getAllGenres = async () => {
    try {
      await axios
        .get(`${API_URL}genre/movie/list?api_key=${API_KEY}`)
        .then((res) => {
          setGenres(res.data.genres);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const getMoviesGenres =  async() => {
    try {
        await axios
          .get(`${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreFilter}`)
          .then((res) => {
            // setGenres(res.data.genres);
            console.log(res)
            setMovies(res.data.results)
          });
      } catch (err) {
        console.log(err);
      }

  }

  useEffect(() => {
    getAllGenres();
    getMoviesGenres();
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
