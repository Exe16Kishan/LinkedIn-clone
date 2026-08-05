import { BiSearch } from "react-icons/bi";

function Searchbar() {
  return (
    <div className="flex items-center bg-[#edf3f8] rounded-md px-3 py-2 w-72">
      <BiSearch className="text-xl text-gray-600" />

      <input
        type="search"
        placeholder="Search"
        className="bg-transparent outline-none ml-2 w-full text-sm"
      />
    </div>
  );
}

export default Searchbar;