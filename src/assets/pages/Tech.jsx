import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { addProduct, removeProduct } from "../redux/slice";

import { ToastContainer, toast } from "react-toastify";

const successMsg = () => {
  toast.success("Item added to cart!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};
const errorMsg = () => {
  toast.error("Couldn't add to cart!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};

const Tech = () => {
  const dispatch = useDispatch();

  return (
    <div className="container lg:px-10 mx-auto relative py-20 bg-red-400 min-h-screen h-full flex flex-col gap-10">
      <Navbar />
      This is tech page
      <button
        className="rounded-md shadow-md border cursor-pointer"
        onClick={() => {
          dispatch(addProduct({ name: "Mouse", price: "699" }));
          successMsg();
        }}
      >
        Add Item in Cart
      </button>
      <ToastContainer />
      {/* <button
        className="rounded-md shadow-md border cursor-pointer"
        onClick={() => dispatch(removeProduct({ name: "Mouse" }))}
      >
        Remove Item in Cart
      </button> */}
    </div>
  );
};

export default Tech;
