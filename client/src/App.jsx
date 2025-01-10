import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/Utilities/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import NotFound from "./components/Utilities/NotFound";
import Layout from "./components/Utilities/Layout";
import ProductList from "./components/User/ProductList";
import Cart from "./components/User/Cart";
import About from "./components/Utilities/About";
import Contact from "./components/Utilities/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="products" element={<ProductList />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
