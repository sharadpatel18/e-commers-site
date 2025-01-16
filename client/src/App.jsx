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
import Admin from "./components/Admin/Admin";
import { showName } from "./logic/NameShow";
import { useEffect, useState } from "react";
import ItemForm from "./components/Admin/ItemForm";
import Productdetails from "./components/User/Productdetails";
import OrderForm from "./components/User/Order";

function App() {
  const [userData, setUserData] = useState({});
  const Token = localStorage.getItem("Token");
  
  useEffect(()=>{
    if (Token) {
      const Data = showName(Token);
      setUserData(Data);
    }
  },[])

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
            <Route path="order" element={<OrderForm />} />
            <Route path="order/:id" element={<OrderForm />} />
            <Route path="productdetails/:id" element={<Productdetails />} />
            {userData?.isAdmin == true ? (
              <>
                <Route path="admin" element={<Admin />}  /> 
                <Route path="createItem" element={<ItemForm />}  />
              </>
            ) : null}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
