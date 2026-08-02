import Logo from "@/app/Home/Components/Logo";
import NavList from "@/app/Home/Components/NavList";
import ProfileIcon from "@/app/Home/Components/ProfileIcon";
import Searchbar from "@/app/Home/Components/Searchbar";

function Navbar() {
  return (
    <div className="flex justify-evenly items-center gap-10 mt-2">
      <div className="flex justify-center items-center gap-2" >
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
