import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Search() {
  return (
    <div className="w-[100%]">
      <div className="flex items-center rounded h-10 bg-amazonclone-yellow">
        <select className=" h-[100%] p-2 bg-gray-300 border text-xs xl:text-sm text-black rounded-l">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="text-black flex items-center h-[100%] grow"
          type="text"
        ></input>
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
}

export default Search;
