import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";

function App() {
  return (
    <div className="h-full min-h-screen bg-red-400 container lg:px-10 mx-auto py-20">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
