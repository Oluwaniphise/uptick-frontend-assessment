import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../base_url";
import axios from "axios";

export const FilterDate = ({ setMovies }) => {
  const [date, setDate] = useState("");

  const getMoviesDate = async () => {
    try {
      await axios
        .get(
          `${API_URL}discover/movie?api_key=${API_KEY}&release_date.gte
          ='${date}"`
        )
        .then((res) => {
          console.log(res);
          setMovies(res.data.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoviesDate();
  }, [date]);

  return (
    <section className="max-w-[200px] ">
      <input
        type="date"
        value={date}
        className="block w-full rounded-[30px] p-2 mb-6 text-sm text-black"
        onChange={(e) => setDate(e.target.value)}
      />
    </section>
  );
};
