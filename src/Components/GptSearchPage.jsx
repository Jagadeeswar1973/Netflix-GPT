import { BACKGROUND } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className=" " src={BACKGROUND} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
      </div>
    </>
  );
};
export default GPTSearch;
