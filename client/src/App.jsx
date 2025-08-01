import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Basic layout and pages (you can customize these as per your real project)
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
