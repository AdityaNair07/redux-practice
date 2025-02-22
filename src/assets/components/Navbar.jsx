import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

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
        to={"/products"}
      >
        Products
      </Link>
      {/* <Link
        className="p-2 before:content-[''] before:w-0 before:h-[1px] before:absolute relative before:transition-all before:duration-300 before:ease-in-out before:bg-white hover:before:w-full before:left-0 before:bottom-0"
        to={"/anime"}
      >
        Anime
      </Link> */}
      <div className="relative">
        <BsCart className="text-white text-xl" />
        <span className="w-5 h-5 rounded-full bg-red-600 text-white text-lg px-2 py-1 absolute -top-3 -right-3 flex items-center justify-center">
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
