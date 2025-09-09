import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Layout from "../components/organisms/Layout";
import Category from "../components/pages/Category";
import Contact from "../components/pages/Contact";
import AboutUs from "../components/pages/AboutUs";
import Product from "../components/pages/Product";

export default function Navigation() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/contacto" element={<Contact />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/nosotros" element={<AboutUs />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/product/:productId" element={<Product />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/products" element={<Category />} />
        </Route>

      </Routes>
    </Router>
  );
}
