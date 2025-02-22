import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/slice";

import { ToastContainer, toast } from "react-toastify";

const successMsg = () => {
  toast.success("Item added to cart!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};
const removeMsg = () => {
  toast.error("Item removed from cart!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};

const Anime = () => {
  const dispatch = useDispatch();

  return (
    <div className="lg:px-10 mx-auto relative py-20 bg-red-400 min-h-screen h-full flex flex-col gap-10">
      <Navbar />
      This is Anime page
      <button
        className="p-2 rounded-md shadow-md border cursor-pointer"
        onClick={() => {
          dispatch(addProduct({ name: "Sasuke Figurine", price: "2699" }));
          successMsg();
        }}
      >
        Add Item in Cart
      </button>
      <button
        className="p-2 rounded-md shadow-md border cursor-pointer"
        onClick={() => {
          dispatch(addProduct("Sasuke Figurine"));
          removeMsg();
        }}
      >
        Remove Item in Cart
      </button>
      <ToastContainer />
    </div>
  );
};

export default Anime;
