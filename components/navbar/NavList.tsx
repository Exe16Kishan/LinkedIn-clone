import { NavList as Nav } from "@/utils/NavList";

function NavList() {
  const active = "Home";

  return (
    <div className="flex items-center">
      {Nav.map((item) => (
        <button
          key={item.id}
          className={`relative flex flex-col items-center justify-center
          w-20 h-14
          transition
          ${
            item.title === active
              ? "text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <span className="text-xl">{item.logo}</span>

          <span className="text-xs">{item.title}</span>

          {item.title === active && (
            <span className="absolute bottom-0 h-0 w-full bg-black"></span>
          )}
        </button>
      ))}
    </div>
  );
}

export default NavList;