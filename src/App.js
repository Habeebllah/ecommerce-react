import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import CartPage from './pages/cartpage/CartPage';
import ProductDetailsPage from './pages/productdetailspage/ProductDetailsPage';
import CheckoutDetails from './pages/checkoutpage/CheckoutDetails';
import CheckoutComplete from './pages/checkoutpage/CheckoutComplete';
import CheckoutPayment from './pages/checkoutpage/CheckoutPayment';
import NavBar from './components/navbar/NavBar'
import Product from './pages/productspage/Products';
import Layout from './components/layout/Layout';
import Footer from './components/footer/Footer';
import Contact from './pages/contactpage/Contact';
import QuickView from './components/quickview/QuickView';
const App = () => {
  return (
   <Router>
     <NavBar/>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/products">
          <Product/>
        </Route>
        <Route path="/cart" exact>
          <CartPage/>
        </Route>
        
        <Route path="/checkout-complete" exact>
          <CheckoutComplete/>
        </Route>
        <Route path="/checkout-payment" exact>
          <CheckoutPayment/>
        </Route>
        <Route path="/checkout-details" exact>
          <CheckoutDetails/>
        </Route>
        <Route path="/product-details" exact component={ProductDetailsPage}>
          
        </Route>
        <Route path="/contact" exact component={Contact}>
        </Route>
        
        <Redirect to="/" />
      </Switch>
      <Footer/>
      <QuickView/>
   </Router>
  );
}

export default App;
