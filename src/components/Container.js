import { Route, Routes } from "react-router";
import { useState } from "react";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import Register from "../pages/client/Register";
import Cart from "../pages/client/Cart";
import Wishlist from "../pages/client/Wishlist";
import Profile from "../pages/client/Profile";
import SearchResult from "../pages/client/SearchResult";
import ProductByCategory from "../pages/client/ProductByCategory";
import ProductDetail from "../pages/client/ProductDetail";
import Checkout from "../pages/client/Checkout";
import ProcessCheckout from "../pages/client/ProcessCheckout";
import AccountVerification from "../pages/client/AccountVerification";
import LoginAdmin from "../pages/admin/LoginAdmin";
import Admin from "../pages/admin/Admin";
import { OrderBox } from "../pages/client/components/OrderBox";
export default function Container() {
  const [updateCart, setUpdateCart] = useState(false);
  return (
    <div className="background-color">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/shoppingcart"
          element={<Cart setUpdateCart={setUpdateCart} />}
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-order" element={<OrderBox />} />
        <Route path="/search/:keyword" element={<SearchResult />} />
        <Route path="/:category_slug" element={<ProductByCategory />} />
        <Route path="/detail/:slug" element={<ProductDetail />} />
        <Route
          path="/checkout"
          element={<Checkout setUpdateCart={setUpdateCart} />}
        />
        <Route
          path="/process-checkout"
          element={<ProcessCheckout setUpdateCart={setUpdateCart} />}
        />
        <Route path="/account-verification" element={<AccountVerification />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}
