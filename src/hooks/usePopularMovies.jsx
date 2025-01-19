import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log("qwsdfbgn");
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };
  /*!popularMovies &&*/
  useEffect(() => {
    getPopularMovies(), [];
  });
};

export default usePopularMovies;
