import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tech from "./assets/pages/Tech.jsx";
import Anime from "./assets/pages/Anime.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./assets/redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tech",
    element: <Tech />,
  },
  {
    path: "/anime",
    element: <Anime />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
