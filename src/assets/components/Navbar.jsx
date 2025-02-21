import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-10 text-white fixed top-0 left-0 w-full">
      <Link
        className="p-2 before:content-[''] before:w-0 before:h-[1px] before:absolute relative before:transition-all before:duration-300 before:ease-in-out before:bg-white hover:before:w-full before:left-0 before:bottom-0"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="p-2 before:content-[''] before:w-0 before:h-[1px] before:absolute relative before:transition-all before:duration-300 before:ease-in-out before:bg-white hover:before:w-full before:left-0 before:bottom-0"
        to={"/tech"}
      >
        Tech
      </Link>
      <Link
        className="p-2 before:content-[''] before:w-0 before:h-[1px] before:absolute relative before:transition-all before:duration-300 before:ease-in-out before:bg-white hover:before:w-full before:left-0 before:bottom-0"
        to={"/anime"}
      >
        Anime
      </Link>
    </nav>
  );
};

export default Navbar;
