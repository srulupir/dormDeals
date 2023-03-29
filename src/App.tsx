import React from 'react'
import './App.css'
import {Layout} from './components/layout/Layout'
import {HomePage} from './components/home/HomePage'
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {OrdersPage} from "./components/orders/OrdersPage";
import {CartPage} from "./components/cart/CartPage";
import {BecomeSellerPage} from "./components/becomeseller/BecomeSellerPage";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/home" element={<HomePage/>}></Route>
              <Route path="/orders" element={<OrdersPage/>}></Route>
              <Route path="/cart" element={<CartPage/>}></Route>
              <Route path="/becomeseller" element={<BecomeSellerPage/>}></Route>
          </Route>
      </Routes>
  );
}

export default App;
