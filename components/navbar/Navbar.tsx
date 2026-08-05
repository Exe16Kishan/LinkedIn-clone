import NavList from "@/components/navbar/NavList";
import Logo from "@/components/navbar/Logo";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import Searchbar from "@/components/navbar/Searchbar";

function Navbar() {
  return (
    <div className="flex justify-evenly items-center gap-10 mt-2">
      <div className="flex justify-center items-center gap-2">
        <Logo />
        <Searchbar />
      </div>
      <div className=" flex justify-center items-center gap-5">
        <NavList />
        <ProfileIcon />
      </div>
    </div>
  );
}

export default Navbar;
