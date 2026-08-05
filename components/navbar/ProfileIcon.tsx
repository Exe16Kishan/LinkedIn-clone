import { BiSolidDownArrow } from "react-icons/bi";

function ProfileIcon() {
  return (
    <button className="relative flex flex-col items-center justify-center w-20 h-14 text-gray-500 hover:text-black border-l border-gray-200">
      <img
        src="https://img.icons8.com/?size=50&id=23241&format=png&color=000000"
        alt=""
        className="w-6 h-6 rounded-full"
      />

      <span className="flex items-center gap-1 text-xs">
        Me

        <BiSolidDownArrow size={8} />
      </span>
    </button>
  );
}

export default ProfileIcon;