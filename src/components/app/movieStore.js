import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { API_URL, API_KEY } from "../base_url";

const movieStore = (set) => ({
  movies: [],
  genres: [],
  movieLoading: false,

  getMovies: async () => {
    set({movieLoading: true})
    try {
      await axios
        .get(`${API_URL}discover/movie?api_key=${API_KEY}`)
        .then((res) => {
          set({ movies: res.data.results, movieLoading: false })
        });
    } catch (err) {
      console.log(err);
      set({ movieLoading: false })
     
    }
  },

  getGenres: async () => {
    const apiResponse = await axios.get(
      `${API_URL}genre/movie/list?api_key=${API_KEY}`
    );
    set( {
        genres:apiResponse.data.genres
    });
  },

  getSelectedGenreMovies: async (genreFilter) => {
    const apiResponse = await axios.get(`${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreFilter}`)
    console.log(apiResponse)
    set({ movies: apiResponse.data.results });
  }

});

export const useMovieStore = create(
  devtools(persist(movieStore, { name: "movies" }))
);
