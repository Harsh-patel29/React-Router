import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import "./App.css";
import "./index.css";
import Users from "./Components/Users/Users.jsx";
import Github, { githubInfoLoader } from "./Components/Github/Github.jsx";
import React from "react";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="user/" element={<Users />}>
        <Route path=":userid" element={<Users />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
