import Logo from "@/components/navbar/Logo";
import Searchbar from "@/components/navbar/Searchbar";
import NavList from "@/components/navbar/NavList";
import ProfileIcon from "@/components/navbar/ProfileIcon";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Logo />
          <Searchbar />
        </div>

        <div className="flex items-center gap-4">
          <NavList />
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
}

export default Navbar;