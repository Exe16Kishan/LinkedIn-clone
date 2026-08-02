import { NavList as Nav } from "@/utils/NavList";

function NavList() {
  const black = "Home";
  return (
    <div className="flex justify-center items-center gap-10 mt-2">
      {Nav.map((item) => {
        return (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-2 ${item.title == black ? "text-black" : "text-gray-500"} hover:text-black`}
          >
            <h1 className="text-2xl">{item.logo}</h1>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default NavList;
