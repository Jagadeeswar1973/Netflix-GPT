import openai from "../../utils/openai";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, GEMINI_KEY } from "../../utils/constants";
import { addGptMovieResult } from "../../utils/gptSlice";
import lang from "../../utils/languageConstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-4o",
    // });
    console.log(GEMINI_KEY);
    const genAI = new GoogleGenerativeAI(
      "AIzaSyATUYdK3MZ3OXeXoO6a23meye8NHl_aSds"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const gptResult = await model.generateContent(gptQuery);

    const responseText = gptResult.response.text();
    if (!gptResult.choices) {
      // TODO: Write Error Handling
    }

    // For each movie I will search TMDB API
    const gptMovies = responseText.split(",").map((movie) => movie.trim());

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2  grid grid-cols-12 bg-black rounded-md opacity-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />

        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md "
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
