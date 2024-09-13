import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/views/NotFound";
import Profile from "./components/views/Profile";
import Pizza01 from "./components/views/Pizza01";
import CartProvider from "./components/Context/CartContext";
import MyProvider from "./components/Context/MyContext";


function App() {
  return (
    <>
    <MyProvider>
      <CartProvider>
      <NavBar/>
        <Routes>
          <Route path="/HITO7_REACT/" element={<Home/>}/>
          <Route path="/HITO7_REACT/pizza" element={<CardPizza/>}/>
          <Route path="/HITO7_REACT/pizza/01" element={<Pizza01/>}/>
          <Route path="/HITO7_REACT/cart" element={<Cart/>}/>
          <Route path="/HITO7_REACT/login" element={<LogIn/>}/>
          <Route path="/HITO7_REACT/register" element={<SignUp/>}/>
          <Route path="/HITO7_REACT/profile" element={<Profile/>}/>
          <Route path="/HITO7_REACT/*" element={<NotFound/>}/>
        </Routes>
      </CartProvider>
    </MyProvider>
    </>
  );
}

export default App;
