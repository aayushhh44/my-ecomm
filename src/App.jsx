  // App.js
  import React, { useState, useEffect } from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Layout from "./pages/Layout";
  import Home from "./Home";
  import Login from "./pages/Login";
  import About from "./pages/About";
  import Wishlist from "./pages/Wishlist";
  import Practice from "./components/Practice";
  import Cart from "./pages/Cart";
  import { SmoothScrollHero } from "./pages/Framer";

  import TodaysSalePage from "./pages/TodaysSalePage";

  import ProductDesc from "./pages/ProductDesc";
  import Dashboard from "./admin/Dashboard";
  import Category from "./pages/Categories/Category";
import AdminLayout from "./pages/AdminLayout";

  const App = () => {
    return (
      <Routes key="routes">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/wish-list" element={<Wishlist />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/framer" element={<SmoothScrollHero />} />
          <Route path="/product" element={<TodaysSalePage />} />
          <Route path="/product-desc/:id" element={<ProductDesc />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category/:name" element={<Category />} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    );
  };

  export default App;
