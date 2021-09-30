import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import CartPage from "./pages/cartpage/CartPage";
import ProductDetailsPage from "./pages/productdetailspage/ProductDetailsPage";
import CheckoutDetails from "./pages/checkoutpage/CheckoutDetails";
import CheckoutComplete from "./pages/checkoutpage/CheckoutComplete";
import CheckoutPayment from "./pages/checkoutpage/CheckoutPayment";
import NavBar from "./components/navbar/NavBar";
import Product from "./pages/productspage/Products";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contactpage/Contact";
import QuickView from "./components/quickview/QuickView";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import AccountDashboard from "./pages/account/AccountDashboard";
import AccountDetails from "./pages/account/AccountDetails";
import AccountOrder from "./pages/account/AccountOrder";
import { useEffect, useState } from "react";
import ProductData from "./components/data/Data.json";
import Fuse from "fuse.js";


const App = () => {
  const LOCAL_STORAGE_KEY = "CartItem";
  const { products } = ProductData;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(ProductData);

  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const removeProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const retrieveCartItem = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveCartItem) setCartItems(retrieveCartItem);
  }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newProductList = data.filter((product) => {
        return Object.values(product)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      });
      setSearchResult(newProductList);
    } else {
      setSearchResult(data)
    }

  };
  return (
    <Router>
      <NavBar
        countCartItems={cartItems.length}
        placeholder="Search for product"
        term = {searchTerm}
        searchKeyword = { searchHandler}
      
      />
      <Switch>
        <Route path="/" exact>
          <HomePage
            products={searchTerm.length < 1 ? data : searchResult}
            onAdd={onAdd}
            
          />
        </Route>
        <Route path="/products">
          <Product
            products={searchTerm.length < 1 ? data : searchResult}
            onAdd={onAdd}
            term = {searchTerm}
            searchKeyword = { searchHandler}
          
          />
        </Route>
        <Route path="/cart" exact>
          <CartPage
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            removeProduct={removeProduct}
            clearCart={clearCart}
          />
        </Route>

        <Route path="/checkout-complete" exact>
          <CheckoutComplete />
        </Route>
        <Route path="/checkout-payment" exact>
          <CheckoutPayment cartItems={cartItems} />
        </Route>
        <Route path="/checkout-details" exact>
          <CheckoutDetails cartItems={cartItems} />
        </Route>
        <Route
          path="/product-details/:id"
          exact
          component={ProductDetailsPage}
        ></Route>
        <Route path="/contact" exact component={Contact}></Route>

        <Route path="/sign-in" exact component={SignIn}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route
          path="/account-dashboard"
          exact
          component={AccountDashboard}
        ></Route>
        <Route path="/account-details" exact component={AccountDetails}></Route>
        <Route path="/account-order" exact component={AccountOrder}></Route>

        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
