import { useSelector } from "react-redux";

const Home = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="text-3xl flex flex-col gap-10">
      <p>This is home page</p>
      <p>Cart has {cartItems.length} items</p>
    </div>
  );
};

export default Home;
