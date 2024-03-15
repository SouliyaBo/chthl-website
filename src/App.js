import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://ctlh-api.selectoptions.net:8080/v1/api/product',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2JkZDA5YzEwNTMzZjk4OGFmODQyZSIsInJvbGUiOiJBR0VOVCIsImlhdCI6MTcxMDQxMTg0OX0.Oyikk6V4iAkbqn2z95vdHWBMRMy-YiTC7Q9_nvBZaEU'
      }
    };
    await axios.request(config)
    .then((response) => {
      // console.log("products",response?.data?.data?.data);
      setProducts(response?.data?.data?.data);
    })
    .catch((error) => {
      console.log(error);
    });
    
    // setProducts(data);
  };


  const handleAddToCart = (productId, quantity) => {
    setTotal(quantity)
    const newData = products.filter(prod => prod?._id === productId)
    console.log('newData: ', newData);
    setCart(newData);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    // const { cart } = await products.cart.update(productId, { quantity });

    // setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    // const { cart } = await products.cart.remove(productId);

    // setCart(cart);
  };

  const handleEmptyCart = async () => {
    // const { cart } = await products.cart.empty();

    // setCart(cart);
  };

  const refreshCart = async () => {
    // const newCart = await products.cart.refresh();

    // setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await products.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={total} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          {/* <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
