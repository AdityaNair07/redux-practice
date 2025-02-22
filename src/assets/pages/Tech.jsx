import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { addProduct, removeProduct } from "../redux/slice";

import { ToastContainer, toast } from "react-toastify";
import { fetchProducts } from "../api/fetchProducts";
import { useEffect, useState } from "react";

const successMsg = () => {
  toast.success("Item added to cart!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};
const removeMsg = () => {
  toast.error("Removed item from cart!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};

const Tech = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="lg:px-10 mx-auto relative py-20 bg-red-400 min-h-screen h-full flex flex-col gap-10">
      <Navbar />
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5 items-start justify-center">
        {products?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border rounded-md shadow-md min-h-40 bg-neutral-300 p-4"
          >
            {item.title}
            <div className="flex items-center gap-4 mt-auto">
              <button
                className="rounded-md shadow-md border cursor-pointer p-2 w-full bg-green-500"
                onClick={() => {
                  dispatch(addProduct({ name: item.title, price: item.price }));
                  successMsg();
                }}
              >
                Add Item
              </button>
              <button
                className="rounded-md shadow-md border cursor-pointer p-2 w-full bg-red-500"
                onClick={() => {
                  dispatch(removeProduct(item.title));
                  removeMsg();
                }}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Tech;
