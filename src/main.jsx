import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { AppProvider } from "./context";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BookDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
