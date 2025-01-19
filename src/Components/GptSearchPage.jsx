import { BACKGROUND } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BACKGROUND} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
