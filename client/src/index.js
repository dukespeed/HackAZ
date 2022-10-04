import React from "react";
import App from "./App";
import Forum from "./Forum";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

var ReactDOM = require('react-dom/client');

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="forum" element={<Forum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);