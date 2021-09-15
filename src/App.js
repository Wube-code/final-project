import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import ProductsPage from "./component/product/ProductsPage";
import ProductDetails from "./component/product/ProductDetails";

import Checkout from "./component/checkout/Checkout";
import Payment from "./component/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//import Landing from "./component/Nav";

const promise = loadStripe(
    "pk_test_51INf8ILZ8xpRgpfiLp5TR4VxeCIvrjg9ZjHXIipJA9ES79jzVjsHeuKYDkCi1NbBXCbLD0hFaOy6KeeqgZncoCCC0019O5lnlq"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route path="/productdetail">
            <Header />
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Header />
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

