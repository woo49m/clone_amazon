import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { CallAPI } from "../utils/CallApi";
import { useNavigate, createSearchParams } from "react-router-dom";

function Search() {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerms, setsearchTerms] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerms: `${searchTerms}`,
      })}`,
    });

    setsearchTerms("");
    setCategory("All");
  };

  const getsSuggestions = () => {
    CallAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => getsSuggestions(), []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center rounded h-10 bg-amazonclone-yellow">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className=" h-[100%] p-2 bg-gray-300 border text-xs xl:text-sm text-black rounded-l"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="text-black flex items-center h-[100%] grow p-2"
          type="text"
          value={searchTerms}
          onChange={(e) => setsearchTerms(e.target.value)}
        ></input>
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className=" bg-white text-black absolute z-40 w-full">
          {suggestions
            .filter((suggestion) => {
              const title = suggestion.title.toLowerCase();
              const currentSearch = searchTerms.toLowerCase();
              return (
                currentSearch &&
                title.startsWith(currentSearch) &&
                currentSearch !== title
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                className="hover:cursor-pointer hover:bg-slate-200"
                onClick={() => setsearchTerms(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Search;
