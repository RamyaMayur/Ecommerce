import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'

// const App = () => {
//   return <Home/> 
// return <ProductList/> 
// return <Product/>
// return <Register/>
// return <Login/>
// return <Cart/>
// };

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/ProductList" element={<ProductList/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;