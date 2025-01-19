import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const state = useSelector((store) => store.Gpt);

  return (
    <div className="mt-4 bg-black  text-white  bg-opacity-120">
      <div>
        {state.movieNames &&
          state.movieNames.map((movie, index) => (
            <MovieList
              key={movie}
              title={movie}
              movies={state.movieResults[index]}
            />
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
