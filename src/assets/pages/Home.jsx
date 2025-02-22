import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/slice";

const Home = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="text-3xl flex flex-col gap-10 lg:px-10 mx-auto container">
      <p>This is home page</p>
      {cartItems.length >= 1 && (
        <p>
          Total cost: ₹
          {(
            cartItems.reduce((total, currentVal) => {
              return (total += currentVal.price);
            }, 0) * 80
          ).toFixed(0)}
        </p>
      )}
      <div className="flex flex-col gap-5">
        {cartItems.map((item, index) => (
          <div className="flex gap-5 justify-start items-center" key={index}>
            <span>{item.name}</span>
            <span>₹{(item.price * 80).toFixed(0)}</span>
            <button
              className="border rounded-md bg-red-500 p-2 flex items-center justify-center text-xl cursor-pointer"
              onClick={() => dispatch(removeProduct(item.name))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
