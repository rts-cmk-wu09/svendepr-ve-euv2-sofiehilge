import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Schedule from "./pages/Schedule.jsx";
import ClassDetails from "./pages/ClassDetails.jsx";
import LogIn from "./pages/LogIn.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Loading from "./pages/LoadingPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/classdetails/:id" element={<ClassDetails />} />
      <Route path="/login" element={<LogIn />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
